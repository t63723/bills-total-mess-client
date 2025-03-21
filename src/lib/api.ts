export interface ApiResponse<T> {
    ok: boolean;
    data: T;
    status: number;
}

export async function apiRequest<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body: Record<string, any> | null = null,
    headers: Record<string, string> = {}
): Promise<ApiResponse<T>> {

    const apiUrl = import.meta.env.VITE_API_URL;
    const fullUrl = `${apiUrl}${url}`;

    const defaultHeaders: Record<string, string> = {};
    if (body) {
        defaultHeaders['Content-Type'] = 'application/json';
    }

    const requestOptions: RequestInit = {
        method,
        headers: { ...defaultHeaders, ...headers },
        body: body ? JSON.stringify(body) : null,
    };

    const res = await fetch(fullUrl, requestOptions);
    const data: T = await res.json();
    return { ok: res.ok, data, status: res.status };
}
