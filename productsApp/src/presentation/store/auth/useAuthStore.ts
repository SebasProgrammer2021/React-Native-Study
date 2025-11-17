import { create } from "zustand";
import { User } from "../../../domain/entities/user";
import { AuthStatus } from "../../../infrastructure/interfaces/auth.status";
import { authCheckStatus, authLogin } from "../../../actions/aut/auth";
import { StorageAdapter } from "../../../config/adapters/async-storage";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    console.log("🚀 ~ login: ~ email:", email)
    const response = await authLogin(email, password);
    console.log("🚀 ~ login: ~ response:", response)

    if (!response) {
      console.log("❌ Login fallido");
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      return false;
    };

    console.log("💾 Guardando token en storage...");
    await StorageAdapter.setItem('token', response.token);
    
    // Verificar que se guardó correctamente
    const savedToken = await StorageAdapter.getItem('token');
    console.log("✅ Token guardado correctamente:", savedToken ? "Sí" : "No");

    set({ status: 'authenticated', token: response.token, user: response.user });

    return true;
  },

  checkStatus: async () => {
    console.log("🔍 Verificando estado de autenticación...");
    const tokenGuardado = await StorageAdapter.getItem('token');
    console.log("🔑 Token en storage:", tokenGuardado ? "Existe" : "No existe");
    
    const response = await authCheckStatus();

    if (!response) {
      console.log("ℹ️ No hay sesión activa - Redirigiendo a login");
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      return;
    };

    console.log("✅ Sesión activa encontrada");
    await StorageAdapter.setItem('token', response.token);
    set({ status: 'authenticated', token: response.token, user: response.user });
  },

  logout: async () => {
    await StorageAdapter.removeItem('token');
    set({ status: 'unauthenticated', token: undefined, user: undefined });
  },
}))