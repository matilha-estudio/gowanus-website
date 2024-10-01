import { apiFetch } from "./api"
import { ApiResponseUnionChannel } from "./models/unionChannel";

export async function getUnionChannelPage(): Promise<ApiResponseUnionChannel> {
  try {
    const data = await apiFetch<ApiResponseUnionChannel>({
      endpoint: '/pages/144',
      method: 'GET',
    });

    return data as ApiResponseUnionChannel;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}