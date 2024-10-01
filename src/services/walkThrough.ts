import { apiFetch } from "./api"
import { ApiResponseWalkThrough } from "./models/walkThrough";

export async function getWalkThroughPage(): Promise<ApiResponseWalkThrough> {
  try {
    const data = await apiFetch<ApiResponseWalkThrough>({
      endpoint: '/pages/155',
      method: 'GET',
    });

    return data as ApiResponseWalkThrough;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}