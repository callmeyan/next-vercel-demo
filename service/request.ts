const dev = process.env.NODE_ENV !== "production";
const isCI = process.env.CI;
export const API_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://" + process.env.VERCEL_URL;

export async function request<T>(url: string) {
  if (isCI) {
    return Promise.resolve({});
  }
  const r = await fetch(API_URL + url);
  return (await r.json()) as T;
}
