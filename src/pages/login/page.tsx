import { Header } from "../../components/layout/header";
import {
  IconDashboard,
  IconDataset,
  IconInfraMonitor,
  IconKnowledgeBase,
  IconLearning,
  IconMemberManagement,
  IconModel,
  IconPrompt,
  IconService,
  IconWorkflow,
} from "../../assets/img/nav";
import {
  Sidebar,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarPin,
  SidebarProvider,
} from "./sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { Link } from "react-router";

type MenuItemType = {
  path: string;
  icon: React.ComponentType;
  label: string;
  children?: {
    path: string;
    label: string;
  }[];
};

const menus: MenuItemType[] = [
  {
    path: "/service",
    icon: IconService,
    label: "서비스",
  },
  {
    path: "/workflow",
    icon: IconWorkflow,
    label: "워크플로우",
  },
  {
    path: "/model",
    icon: IconModel,
    label: "모델",
    children: [
      {
        path: "/model/model-catalog",
        label: "모델 카탈로그",
      },
      {
        path: "/model/custom-model",
        label: "커스텀 모델",
      },
    ],
  },
  {
    path: "/dataset",
    icon: IconDataset,
    label: "데이터셋",
  },
  {
    path: "/knowledge-base",
    icon: IconKnowledgeBase,
    label: "지식 기반",
  },
  {
    path: "/prompt",
    icon: IconPrompt,
    label: "프롬프트",
  },
  {
    path: "/learning",
    icon: IconLearning,
    label: "학습",
  },
  {
    path: "/dashboard",
    icon: IconDashboard,
    label: "대시보드",
  },
  {
    path: "/infra-monitor",
    icon: IconInfraMonitor,
    label: "인프라 모니터",
    children: [
      {
        path: "/infra-monitor/monitoring",
        label: "모니터링",
      },
      {
        path: "/infra-monitor/event",
        label: "이벤트",
      },
    ],
  },
  {
    path: "/member-management",
    icon: IconMemberManagement,
    label: "멤버 관리",
  },
];

export default function LoginPage() {
  return (
    <>
      <Header />
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            {menus.map((menu) =>
              menu.children ? (
                <Collapsible>
                  <SidebarMenuItem>
                    <CollapsibleTrigger>
                      <menu.icon />
                      <span>{menu.label}</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {menu.children.map((menuSub) => (
                          <SidebarMenuSubItem>
                            <span>{menuSub.label}</span>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem>
                  <Link to={menu.path}>
                    <menu.icon />
                    <span>{menu.label}</span>
                  </Link>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
          <SidebarPin />
        </Sidebar>
        <SidebarInset>
          <main>메인 내용</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
