import { apiFetch } from "./api"
import { TheClubResponse } from "./models/theClub";

export async function getTheClub(): Promise<TheClubResponse> {
  try {
    const data = await apiFetch<TheClubResponse>({
      endpoint: '/the-club',
      method: 'GET',
    });

    return data as TheClubResponse;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}