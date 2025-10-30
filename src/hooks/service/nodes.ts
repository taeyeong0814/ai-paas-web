import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

// 노드 상태 타입
export type NodeStatus = {
  nodeName: string;
  nodeIp: string;
  condition: {
    ready: boolean;
    diskPressure: boolean;
    memoryPressure: boolean;
    pidpressure: boolean;
    networkPressure: boolean;
  };
};

// 노드 목록 조회 훅
export const useGetNodes = (clusterId?: string) => {
  return useQuery({
    queryKey: ['nodes', clusterId],
    queryFn: async (): Promise<NodeStatus[]> => {
      if (!clusterId) {
        return [];
      }

      const response = await api.get(`any-cloud/monit/nodeStatus/${clusterId}`);

      // Response 객체인 경우 .json()으로 데이터 추출
      if (response instanceof Response) {
        const data = await response.json();
        return Array.isArray(data) ? data : [];
      }

      //   // 일반 배열인 경우
      //   if (Array.isArray(response)) {
      //     return response;
      //   }

      return [];
    },
    enabled: !!clusterId,
    staleTime: 0, // 캐시를 즉시 무효화하여 매번 새로 호출
    refetchOnWindowFocus: true, // 윈도우 포커스 시 재호출
    retry: false, // API 실패 시 재시도하지 않음
    retryOnMount: false, // 마운트 시 재시도하지 않음
  });
};
