import { apiFetch } from "./api"
import { NeighborhoodResponse } from "./models/neighborhood";

export async function getNeighborhood(): Promise<NeighborhoodResponse> {
  try {
    const data = await apiFetch<NeighborhoodResponse>({
      endpoint: '/neighborhood',
      method: 'GET',
    });

    return data as NeighborhoodResponse;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}