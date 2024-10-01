import { apiFetch } from "./api"
import { ApiResponseService } from "./models/service"

export async function getServicePage(): Promise<ApiResponseService> {
  try {
    const data = await apiFetch<ApiResponseService>({
      endpoint: '/pages/143',
      method: 'GET',
    });

    return data as ApiResponseService;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}