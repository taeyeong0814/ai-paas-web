import { useQuery } from '@tanstack/react-query';

import { api } from '../../lib/api';
import type {
  HelmRelease,
  HelmReleaseListMeta,
  HelmRepository,
  HelmRepositoryListMeta,
} from '../../types/helm';

export interface GetHelmReleasesParams {
  clusterId?: string;
  clusterName?: string;
  search?: string;
  page?: number;
  size?: number;
}

export const useGetHelmReleases = (params: GetHelmReleasesParams = {}) => {
  const searchParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== ''
    )
  );

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['helm-releases', searchParams],
    queryFn: async () => {
      const response = await api
        .get('any-cloud/catalog/releases', {
          searchParams,
        })
        .json<{
          data: HelmRelease[];
          page?: number;
          size?: number;
          total?: number;
          total_pages?: number;
        }>();

      const meta: HelmReleaseListMeta | undefined =
        response.page !== undefined ||
        response.size !== undefined ||
        response.total !== undefined ||
        response.total_pages !== undefined
          ? {
              page: response.page,
              size: response.size,
              total: response.total,
              totalPages: response.total_pages,
            }
          : undefined;

      return {
        releases: response.data || [],
        meta,
      };
    },
  });

  return {
    releases: data?.releases ?? [],
    meta: data?.meta,
    isPending,
    isError,
    error,
    refetch,
  };
};

export const useGetHelmRepositories = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['helm-repositories'],
    queryFn: async () => {
      const response = await api.get('any-cloud/helm-repos').json<{
        data: HelmRepository[];
        page?: number;
        size?: number;
        total?: number;
        total_pages?: number;
      }>();

      const meta: HelmRepositoryListMeta | undefined =
        response.page !== undefined ||
        response.size !== undefined ||
        response.total !== undefined ||
        response.total_pages !== undefined
          ? {
              page: response.page,
              size: response.size,
              total: response.total,
              totalPages: response.total_pages,
            }
          : undefined;

      return {
        repositories: response.data || [],
        meta,
      };
    },
  });

  return {
    repositories: data?.repositories ?? [],
    meta: data?.meta,
    isPending,
    isError,
    error,
    refetch,
  };
};
