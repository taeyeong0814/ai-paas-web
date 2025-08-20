import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";
import type { Page } from "../../types/api";
import type { GetServicesParams, Service } from "../../types/service";

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
