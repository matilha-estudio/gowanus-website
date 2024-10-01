import { apiFetch } from "./api"
import { PostResponse } from "./models/blog";

export async function getAllPosts(): Promise<PostResponse> {
  try {
    const data = await apiFetch<PostResponse>({
      endpoint: '/posts',
      method: 'GET',
    });

    return data as PostResponse;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}