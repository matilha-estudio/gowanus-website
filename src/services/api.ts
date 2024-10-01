import { ApiFetchOptions, ApiResponse } from "./models/api";

const SiteUrl = "https://gowanuswharf.wpenginepowered.com/index.php"
const API_USERNAME = 'api-user';
const API_PASSWORD = 'Matilha1!2024';

export async function apiFetch<T>({ 
  endpoint, 
  method = 'GET', 
  data = {}, 
  pageble = false }: 
ApiFetchOptions
): Promise<ApiResponse<T> | T | string> {
  const API_URL = `${SiteUrl}/wp-json/wp/v2`;

  const apiUrl = `${API_URL}${endpoint}`;
  const basicAuth = btoa(`${API_USERNAME}:${API_PASSWORD}`);

  try {
    const response = await fetch(apiUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth}`,
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      return `Request error: ${response.status} - ${response.statusText}`;
    }
    
    if (pageble) {
      const totalPages = response.headers.get('X-WP-TotalPages');
      const resp = await response.json();
      
      return {
        data: resp,
        totalPages
      };
    }
    
    return await response.json();
  } catch (error) {
    console.error('Request error:', error instanceof Error ? error.message : error);
    throw error;
  }
}