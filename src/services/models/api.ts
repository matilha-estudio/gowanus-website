export interface ApiFetchOptions {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Record<string, any>;
  pageble?: boolean;
}

export interface ApiResponse<T> {
  data: T;
  totalPages?: string | null;
}