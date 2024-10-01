import { apiFetch } from "./api"
import { ApiResponseHomePage } from "./models/home";

export async function getHomePage(): Promise<ApiResponseHomePage> {
  try {
    const data = await apiFetch<ApiResponseHomePage>({
      endpoint: '/pages/141',
      method: 'GET',
    });

    return data as ApiResponseHomePage;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}