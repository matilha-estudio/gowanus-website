import { apiFetch } from "./api"
import { PostResponse } from "./models/blog";
import { BlogDetailsProps } from "./models/blog-details";

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

export async function getPostDetail(slug: string): Promise<BlogDetailsProps> {
  try {
    const data = await apiFetch<BlogDetailsProps>({
      endpoint: `/posts/?slug=${slug}`,
      method: 'GET',
    });

    return data as BlogDetailsProps;
  } catch (error) {
    console.error('Error fetching pages:', error instanceof Error ? error.message : error);
    throw error;
  }
}