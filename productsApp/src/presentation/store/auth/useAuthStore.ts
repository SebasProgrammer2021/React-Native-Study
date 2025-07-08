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
    console.log("🚀 ~ login: ~ password:", password)
    console.log("🚀 ~ login: ~ email:", email)
    const response = await authLogin(email, password);
    console.log("🚀 ~ login: ~ response:", response)

    if (!response) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      return false;
    };

    await StorageAdapter.setItem('token', response.token);

    set({ status: 'authenticated', token: response.token, user: response.user });

    return true;
  },

  checkStatus: async () => {
    const response = await authCheckStatus();

    if (!response) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      return;
    };

    await StorageAdapter.setItem('token', response.token);

    set({ status: 'authenticated', token: response.token, user: response.user });
  },

  logout: async () => {
    await StorageAdapter.removeItem('token');
    set({ status: 'unauthenticated', token: undefined, user: undefined });
  },
}))