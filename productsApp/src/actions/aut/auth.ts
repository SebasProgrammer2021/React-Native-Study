import tesloApi from "../../config/api/tesloApi";
import { User } from "../../domain/entities/user";
import type { AuthResponse } from "../../infrastructure/interfaces/auth.response";

const returUserToken = (data: AuthResponse) => {
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    isActive: data.isActive,
    roles: data.roles
  }

  return {
    user: user,
    token: data.token
  }
}

export const authLogin = async (email: string, password: string) => {
  email = email.toLocaleLowerCase();

  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/login", { email, password });

    return returUserToken(data);
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
}

export const authCheckStatus = async () => {
  try {
    const { data } = await tesloApi.get<AuthResponse>("/auth/check-status");
    console.log("✅ Auth status check exitoso");
    return returUserToken(data);
    
  } catch (error: any) {
    // 401 es esperado cuando no hay token o expiró
    if (error.response?.status === 401) {
      console.log("ℹ️ No hay sesión activa (401) - Usuario no autenticado");
    } else {
      console.error("❌ Error checking auth status:", error.message);
    }
    return null;
  }
}