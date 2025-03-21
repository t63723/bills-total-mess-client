import { apiRequest } from './api';
import type { ApiResponse } from './api';

interface ProtectedDataResponse {
    message: string;
    detail?: string;
}

export async function fetchProtectedData(): Promise<ApiResponse<ProtectedDataResponse>> {
    const accessToken = localStorage.getItem('access_token');
    const headers = { 'Authorization': `Bearer ${accessToken}` };
    return apiRequest<ProtectedDataResponse>('protected/', 'GET', null, headers);
}