import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../lib/api";
import type { Page } from "../../types/api";
import type {
  CreateServiceRequest,
  GetServicesParams,
  Service,
  UpdateServiceRequest,
} from "../../types/service";

export const useGetServices = (params: GetServicesParams = {}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["services", params],
    queryFn: () => api.get<Page<Service>>("services").json(),
  });

  return {
    services: data?.data ?? [],
    page: {
      number: data?.page ?? 1,
      size: data?.size ?? 1,
      total: data?.total ?? 1,
    },
    isPending,
    isError,
  };
};

export const useCreateService = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (data: CreateServiceRequest) =>
      api.post("services", { json: data }).json<Service>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  return {
    createService: mutate,
    isPending,
    isError,
    isSuccess,
  };
};

export const useGetService = (serviceId?: number, enabled: boolean = true) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["services", serviceId],
    queryFn: () => api.get(`services/${serviceId}`).json<Service>(),
    enabled,
  });

  return {
    service: data,
    isPending,
    isError,
  };
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({ serviceId, ...data }: UpdateServiceRequest) =>
      api.put(`services/${serviceId}`, { json: data }).json<Service>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  return {
    updateService: mutate,
    isPending,
    isError,
    isSuccess,
  };
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (serviceId: number) =>
      api.delete(`services/${serviceId}`).json<string>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  return {
    deleteService: mutate,
    isPending,
    isError,
    isSuccess,
  };
};
