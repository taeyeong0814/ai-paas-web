import { useQuery } from "@tanstack/react-query";
import type { Page } from "../../types/api";

interface Service {
  id: number;
  name: string;
  description: string;
  tag: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

interface GetServicesParams {
  page?: number;
  size?: number;
  search?: string;
}

const getServices = async (
  params: GetServicesParams = {},
): Promise<Page<Service>> => {
  const { page = 1, size = 20, search } = params;

  const searchParams = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
  });

  if (search) {
    searchParams.append("search", search);
  }

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/services/?${searchParams}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    },
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP ${response.status}`);
  }

  return response.json();
};

export const useGetServices = (params: GetServicesParams = {}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["services", params],
    queryFn: () => getServices(params),
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
