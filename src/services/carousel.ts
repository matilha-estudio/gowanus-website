import { apiFetch } from "./api"
import { CarouselResponse } from "./models/carousel";

export async function getCarousel(): Promise<CarouselResponse> {
  try {
    const data = await apiFetch<CarouselResponse>({
      endpoint: '/carousel',
      method: 'GET',
    });

    return data as CarouselResponse;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}