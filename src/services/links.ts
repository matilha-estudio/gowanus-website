import { apiFetch } from "./api"
import { PropertiesResponse } from "./models/availability";
import { acf } from "./models/links";

export async function getLinks(): Promise<acf> {
  try {
    const data: any = await apiFetch({
      endpoint: '/pages/344',
      method: 'GET',
    });

    const response = data.acf

    return response as acf;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}