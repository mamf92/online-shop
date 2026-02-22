const BASE_URL = 'https://v2.api.noroff.dev';

export interface ApiError {
  errors?: {
    code?: string;
    message: string;
    path?: string[];
  }[];
  status?: string;
  statusCode?: number;
}

export class ApiClientError extends Error {
  public apiError: ApiError;
  public statusCode: number;

  constructor(apiError: ApiError, statusCode: number) {
    super(apiError.errors?.[0]?.message || 'API Client Error occurred');
    this.name = 'ApiClientError';
    this.apiError = apiError;
    this.statusCode = statusCode;
  }
}

async function apiClient<T = unknown>(endpoint: string): Promise<T> {
  const config: RequestInit = {
    method: 'GET',
  };

  try {
    const response = await fetch(BASE_URL + endpoint, config);

    if (!response.ok) {
      let errorData: ApiError;
      try {
        errorData = await response.json();
      } catch {
        errorData = {
          statusCode: response.status,
          status: response.statusText,
          errors: [{ message: 'Failed to parse error response' }],
        };
      }
      throw new ApiClientError(errorData, response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiClientError) throw error;
    console.error('API Client Error:', error);
    throw error;
  }
}

export const get = <T = unknown>(endpoint: string) => apiClient<T>(endpoint);
