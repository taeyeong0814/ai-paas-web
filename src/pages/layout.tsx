import { Header } from "../components/layout/header";
import { Outlet } from "react-router";
import {
  Sidebar,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarPin,
  SidebarProvider,
} from "./login/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import { Link, useLocation } from "react-router";
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
} from "../assets/img/nav";

export default function DefaultLayout() {
  const location = useLocation();

  return (
    <>
      <Header />
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            {menus.map((menu) =>
              menu.children ? (
                <Collapsible className="group/collapsible" key={menu.path}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        isActive={menu.children
                          .map((it) => it.path)
                          .includes(location.pathname)}
                      >
                        <div>
                          <menu.icon />
                        </div>
                        <span>{menu.label}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {menu.children.map((menuSub) => (
                          <SidebarMenuSubItem key={menuSub.path}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={location.pathname === menuSub.path}
                            >
                              <Link to={menuSub.path}>
                                <span>{menuSub.label}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={menu.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === menu.path}
                  >
                    <Link to={menu.path}>
                      <div>
                        <menu.icon />
                      </div>
                      <span>{menu.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ),
            )}
          </SidebarMenu>
          <SidebarPin />
        </Sidebar>
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

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
