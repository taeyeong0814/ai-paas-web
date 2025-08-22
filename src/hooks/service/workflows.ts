import { api } from "@/lib/api";
import type { Page } from "@/types/api";
import type {
  CreateWorkflowRequest,
  UpdateWorkflowRequest,
  Workflow,
} from "@/types/workflow";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetWorkflows = (params: {
  skip?: number;
  limit?: number;
  search?: string;
  creator_id?: number;
}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["workflows", params],
    queryFn: () =>
      api
        .get<Page<Workflow>>("workflows", { searchParams: { ...params } })
        .json(),
  });

  return {
    workflows: data?.data ?? [],
    page: {
      number: data?.page ?? 1,
      total: data?.total ?? 1,
      size: data?.size ?? 1,
    },
    isPending,
    isError,
  };
};

export const useCreateWorkflow = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (data: CreateWorkflowRequest) =>
      api.post("workflows", { json: data }).json<Workflow>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
    },
  });

  return {
    createWorkflow: mutate,
    isPending,
    isError,
    isSuccess,
  };
};

export const useGetWorkflow = (
  workflowId?: number,
  enabled: boolean = true,
) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["workflows", workflowId],
    queryFn: () => api.get(`workflow/${workflowId}`).json<Workflow>(),
    enabled,
  });

  return {
    workflow: data,
    isPending,
    isError,
  };
};

export const useUpdateWorkflow = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({ workflowId, ...data }: UpdateWorkflowRequest) =>
      api.put(`workflows/${workflowId}`, { json: data }).json<Workflow>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
    },
  });

  return {
    updateWorkflow: mutate,
    isPending,
    isError,
    isSuccess,
  };
};

export const useDeleteWorkflow = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (workflowId: number) =>
      api.delete(`workflows/${workflowId}`).json<string>(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
    },
  });

  return {
    deleteWorkflow: mutate,
    isPending,
    isError,
    isSuccess,
  };
};

export const useGetMyWorkflows = (
  params: {
    skip?: number;
    limit?: number;
  } = {},
) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["myworkflows", params],
    queryFn: () =>
      api
        .get<
          Page<Workflow>
        >("workflows/my/workflows", { searchParams: { ...params } })
        .json(),
  });

  return {
    workflows: data?.data ?? [],
    page: {
      number: data?.page ?? 1,
      total: data?.total ?? 1,
      size: data?.size ?? 1,
    },
    isPending,
    isError,
  };
};

export const useGetWorkflowExternalStatus = (workflowId?: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["workflowstatus", workflowId],
    queryFn: () =>
      api.get(`workflow/${workflowId}/external-status`).json<string>(),
  });

  return {
    workflowStatus: data,
    isPending,
    isError,
  };
};
