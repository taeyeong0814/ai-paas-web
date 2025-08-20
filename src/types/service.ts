export interface Service {
  id: number;
  name: string;
  description: string;
  tag: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface GetServicesParams {
  page?: number;
  size?: number;
  search?: string;
}

export interface CreateServiceRequest {
  name: string;
  description: string;
  tag: string;
}

export interface UpdateServiceRequest extends Partial<CreateServiceRequest> {
  id: number;
}