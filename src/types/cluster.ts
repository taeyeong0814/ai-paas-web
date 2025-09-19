export interface Cluster {
  id: string;
  description: string;
  version: string;
  apiServerUrl: string;
  apiServerIp: string;
  serverCa: string;
  clientCa: string;
  clientKey: string;
  clientToken: string | null;
  monitServerUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetClustersParams {
  page?: number;
  size?: number;
  search?: string;
}

export interface CreateClusterRequest {
  clusterType: string;
  clusterProvider: string;
  clusterName: string;
  description: string;
  apiServerIp: string;
  apiServerUrl: string;
  serverCA: string;
  clientCA: string;
  clientKey: string;
  monitServerURL: string;
}

export interface UpdateClusterRequest {
  clusterId: string;
  name?: string;
  type?: string;
  provider?: string;
  kubernetesConfig?: string;
  monitoringApiUrl?: string;
}
