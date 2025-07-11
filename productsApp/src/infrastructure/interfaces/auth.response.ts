export interface AuthResponse {
  id?: string;
  email?: string;
  fullName?: string;
  isActive: boolean;
  roles: string[];
  token: string;
}