import { apiRequest } from './api';
import type { ApiResponse } from './api';


interface RegistrationResponse {
    id: number;
    username: string;
    email: string;
    detail?: string;
}

interface LoginResponse {
    access: string;
    refresh: string;
    detail?: string;
}

export async function registerUser(username: string, email: string, password: string): Promise<ApiResponse<RegistrationResponse>> {
    return apiRequest<RegistrationResponse>('register/', 'POST', { username, email, password });
}

export async function loginUser(username: string, password: string): Promise<ApiResponse<LoginResponse>> {
    return apiRequest<LoginResponse>('login/', 'POST', { username, password });
}
