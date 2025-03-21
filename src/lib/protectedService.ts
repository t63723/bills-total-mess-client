// src/lib/protectedService.ts
import { apiRequest } from './api';
import type { ApiResponse } from './api';
import { logout } from './authService';

interface ProtectedDataResponse {
    message: string;
    detail?: string;
}

export async function fetchProtectedData(): Promise<ApiResponse<ProtectedDataResponse>> {
    const accessToken = localStorage.getItem('access_token');
    const headers = { 'Authorization': `Bearer ${accessToken}` };
    return apiRequest<ProtectedDataResponse>('protected/', 'GET', null, headers);
}

export async function getProtectedData() {
    const result = await fetchProtectedData();
    if (result.status === 401) {
        console.log('Ваш токен истек или недействителен. Пожалуйста, войдите снова.');
        logout();
    }
    return result;
}