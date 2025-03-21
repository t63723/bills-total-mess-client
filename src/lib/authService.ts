// Добавление регистрации в authService.ts
import { apiRequest } from './api';
import type { ApiResponse } from './api';
import { setLoggedIn, navigateTo } from './appService';

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
    const result = await apiRequest<LoginResponse>('login/', 'POST', { username, password });
    if (result.ok) {
        localStorage.setItem('access_token', result.data.access);
        localStorage.setItem('refresh_token', result.data.refresh);
        setLoggedIn(true);
        navigateTo('protected');
        console.log('Вы успешно вошли!');
    } else {
        console.error('Ошибка входа:', result.data.detail);
    }
    return result;
}

export function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setLoggedIn(false);
    navigateTo('login');
    console.log('Вы вышли из системы.');
}
