import { createBrowserRouter } from "react-router";
import ServicePage from "../pages/service/page";
import WorkflowPage from "../pages/workflow/page";
import ModelCatalogPage from "../pages/model/model-catalog/page";
import CustomModelPage from "../pages/model/custom-model/page";
import DatasetPage from "../pages/dataset/page";
import KnowledgeBasePage from "../pages/knowledge-base/page";
import PromptPage from "../pages/prompt/page";
import LearningPage from "../pages/learning/page";
import DashboardPage from "../pages/dashboard/page";
import MonitoringPage from "../pages/infra-monitor/monitoring/page";
import EventPage from "../pages/infra-monitor/event/page";
import MemberManagementPage from "../pages/member-management/page";
import DefaultLayout from "../pages/layout";
import ServiceDetailPage from "../pages/service/detail/page";
import WorkflowDetailPage from "../pages/workflow/detail/page";
import WorkflowDetail2Page from "../pages/workflow/detail2/page";
import WorkflowDetail3Page from "../pages/workflow/detail3/page";
import DatasetAddPage from "../pages/dataset/add/page";
import DatasetDetailPage from "../pages/dataset/detail/page";
import KnowledgeBaseStep1Page from "../pages/knowledge-base/step1/page";
import KnowledgeBaseStep2Page from "../pages/knowledge-base/step2/page";
import KnowledgeBaseStep3Page from "../pages/knowledge-base/step3/page";
import PromptAddPage from "../pages/prompt/add/page";
import PromptDetailPage from "../pages/prompt/detail/page";
import LearningAssignmentStep2Page from "../pages/learning/assignment/step2/page";
import LearningAssignmentStep3Page from "../pages/learning/assignment/step3/page";
import LearningAssignmentStep5Page from "../pages/learning/assignment/step5/page";
import LearningAssignmentDetailPage from "../pages/learning/assignment/detail/page";
import LearningSolutionStep2Page from "../pages/learning/solution/step2/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "service",
        index: true,
        element: <ServicePage />,
      },
      {
        path: "service/detail",
        element: <ServiceDetailPage />,
      },
      {
        path: "workflow",
        element: <WorkflowPage />,
      },
      {
        path: "workflow/detail",
        element: <WorkflowDetailPage />,
      },
      {
        path: "workflow/detail2",
        element: <WorkflowDetail2Page />,
      },
      {
        path: "workflow/detail3",
        element: <WorkflowDetail3Page />,
      },
      {
        path: "model",
        children: [
          {
            path: "model-catalog",
            index: true,
            element: <ModelCatalogPage />,
          },
          {
            path: "custom-model",
            element: <CustomModelPage />,
          },
        ],
      },
      {
        path: "dataset",
        element: <DatasetPage />,
      },
      {
        path: "dataset/add",
        element: <DatasetAddPage />,
      },
      {
        path: "dataset/detail",
        element: <DatasetDetailPage />,
      },
      {
        path: "knowledge-base",
        element: <KnowledgeBasePage />,
      },
      {
        path: "knowledge-base/step1",
        element: <KnowledgeBaseStep1Page />,
      },
      {
        path: "knowledge-base/step2",
        element: <KnowledgeBaseStep2Page />,
      },
      {
        path: "knowledge-base/step3",
        element: <KnowledgeBaseStep3Page />,
      },
      {
        path: "prompt",
        element: <PromptPage />,
      },
      {
        path: "prompt/add",
        element: <PromptAddPage />,
      },
      {
        path: "prompt/detail",
        element: <PromptDetailPage />,
      },
      {
        path: "learning",
        element: <LearningPage />,
      },
      {
        path: "learning/assignment/step2",
        element: <LearningAssignmentStep2Page />,
      },
      {
        path: "learning/assignment/step3",
        element: <LearningAssignmentStep3Page />,
      },
      {
        path: "learning/assignment/step5",
        element: <LearningAssignmentStep5Page />,
      },
      {
        path: "learning/assignment/detail",
        element: <LearningAssignmentDetailPage />,
      },
      {
        path: "learning/solution/step2",
        element: <LearningSolutionStep2Page />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "infra-monitor",
        children: [
          {
            path: "monitoring",
            index: true,
            element: <MonitoringPage />,
          },
          {
            path: "event",
            element: <EventPage />,
          },
        ],
      },
      {
        path: "member-management",
        element: <MemberManagementPage />,
      },
    ],
  },
]);
