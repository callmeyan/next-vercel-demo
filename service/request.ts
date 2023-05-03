const dev = process.env.NODE_ENV !== "production";
const isCI = process.env.CI;
export const API_URL = (process.env.PUBLIC_URL || '');

export type AjaxApiResponse<T> = {
    code: number;
    message: string;
    data: T
}

export async function request<T>(url: string, method: 'get' | 'post' = 'get', body?: any) {
    const r = await fetch(API_URL + url, {
        method,
        body: body ? JSON.stringify(body) : undefined
    });
    const result = (await r.json()) as AjaxApiResponse<T>;
    if(result.code !== 0){
        throw Error(result.message || 'server error')
    }
    return result.data;
}
