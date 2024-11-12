import { apiFetch } from "./api"
import { PropertiesResponse } from "./models/availability";

export async function getAvailabilityPage(): Promise<PropertiesResponse[]> {
  try {
    const data: any = await apiFetch({
      endpoint: '/pages/320',
      method: 'GET',
    });

    const response = data.acf_medias.properties

    return response as PropertiesResponse[];
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}