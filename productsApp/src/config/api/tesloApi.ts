import { STAGE, API_URL as PROD_URL, API_URL_IOS, API_URL_ANDROID } from "@env";
import axios from "axios";
import { Platform } from "react-native";
import { StorageAdapter } from "../adapters/async-storage";

const getApiUrl = () => {
  if (STAGE === "production") {
    return PROD_URL;
  }
  return Platform.OS === "ios" ? API_URL_IOS : API_URL_ANDROID;
};

export const API_URL = getApiUrl();

// Debug: Verificar qué URL se está usando
console.log('🔍 API_URL configurada:', API_URL);
console.log('🔍 Platform.OS:', Platform.OS);
console.log('🔍 STAGE:', STAGE);

const tesloApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

tesloApi.interceptors.request.use(
  async (config) => {
    const token = await StorageAdapter.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('🔑 Token encontrado, agregado al header');
    } else {
      console.log('⚠️ No hay token guardado');
    }
    
    // Debug: Ver la URL completa de la petición
    const urlCompleta = (config.baseURL || '') + (config.url || '');
    console.log('🌐 Petición a:', urlCompleta);
    
    return config;
  }
);

// Interceptor de respuesta para mejor debugging
tesloApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
p    // 401 Unauthorized es esperado cuando no hay token o expiró
    if (error.response?.status === 401) {
      console.log('ℹ️ 401 Unauthorized - No hay token válido (esto es normal si no has hecho login)');
    } else {
      const errorUrl = (error.config?.baseURL || '') + (error.config?.url || '');
      console.error('❌ Error en petición:', {
        message: error.message,
        url: errorUrl,
        status: error.response?.status,
        data: error.response?.data
      });
    }
    return Promise.reject(error);
  }
);

export default tesloApi;