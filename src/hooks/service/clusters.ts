import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/api';
import type { Page } from '../../types/api';
import type {
  Cluster,
  CreateClusterRequest,
  GetClustersParams,
  UpdateClusterRequest,
} from '../../types/cluster';

// 클러스터 목록 조회
export const useGetClusters = (params: GetClustersParams = {}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['clusters', params],
    queryFn: () =>
      api.get<Page<Cluster>>('any-cloud/system/clusters', { searchParams: { ...params } }).json(),
  });

  return {
    clusters: data?.data ?? [],
    page: {
      number: data?.page ?? 1,
      size: data?.size ?? 10,
      total: data?.total ?? 0,
    },
    isPending,
    isError,
  };
};

// 클러스터 생성
export const useCreateCluster = (options?: {
  onSuccess?: (data: Cluster) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationKey: ['createCluster'], // 중복 호출 방지
    mutationFn: (data: CreateClusterRequest) =>
      api.post('any-cloud/system/cluster', { json: data }).json<Cluster>(),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['clusters'] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  return {
    createCluster: mutate,
    isPending,
    isError,
    isSuccess,
    error,
  };
};

// 클러스터 단일 조회
export const useGetCluster = (clusterId?: string, enabled: boolean = true) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['cluster', clusterId],
    queryFn: () => api.get(`any-cloud/system/cluster/${clusterId}`).json<Cluster>(),
    enabled: enabled && !!clusterId,
  });

  return {
    cluster: data,
    isPending,
    isError,
  };
};

// 클러스터 수정
export const useUpdateCluster = (options?: {
  onSuccess?: (data: Cluster) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationKey: ['updateCluster'], // 중복 호출 방지
    mutationFn: ({ clusterName, ...data }: UpdateClusterRequest) => {
      return api.put(`any-cloud/system/cluster/${clusterName}`, { json: data }).json<Cluster>();
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['clusters'] });
      queryClient.invalidateQueries({ queryKey: ['cluster', variables.clusterId] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });

  return {
    updateCluster: mutate,
    isPending,
    isError,
    isSuccess,
    error,
  };
};

// 클러스터 삭제
export const useDeleteCluster = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (clusterId: string) =>
      api.delete(`any-cloud/system/cluster/${clusterId}`).json<string>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clusters'] });
    },
  });

  return {
    deleteCluster: mutate,
    isPending,
    isError,
    isSuccess,
  };
};
