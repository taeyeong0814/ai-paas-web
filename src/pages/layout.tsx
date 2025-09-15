import { Header } from '../components/layout/header';
import { Navigate, Outlet } from 'react-router';
import {
  Sidebar,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSubSub,
  SidebarMenuSubSubButton,
  SidebarMenuSubSubItem,
  SidebarPin,
  SidebarProvider,
} from '../components/layout/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { Link, useLocation } from 'react-router';
import {
  IconDashboard,
  IconDataset,
  IconInfraManagement,
  IconKnowledgeBase,
  IconLearning,
  IconMemberManagement,
  IconModel,
  IconPrompt,
  IconService,
  IconWorkflow,
} from '../assets/img/nav';
import { LOCAL_STORAGE } from '../constant/local-storage';

export default function DefaultLayout() {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <SidebarProvider defaultWidth={232} defaultPinned={true}>
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
                          .includes(location.pathname.split('/')[2])}
                      >
                        <div>
                          <img src={menu.icon} alt="" />
                        </div>
                        <span>{menu.label}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {menu.children.map((menuSub) =>
                          menuSub.children ? (
                            <SidebarMenuSubItem key={menuSub.path}>
                              <Collapsible className="group/collapsible">
                                <CollapsibleTrigger asChild>
                                  <SidebarMenuSubButton
                                    isActive={
                                      menuSub.children
                                        .map((it) => it.path)
                                        .includes(location.pathname.split('/')[3]) ||
                                      location.pathname.split('/')[2] === menuSub.path
                                    }
                                  >
                                    <span>{menuSub.label}</span>
                                  </SidebarMenuSubButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <SidebarMenuSubSub>
                                    {menuSub.children.map((menuSubSub) => (
                                      <SidebarMenuSubSubItem key={menuSubSub.path}>
                                        <SidebarMenuSubSubButton
                                          asChild
                                          isActive={
                                            location.pathname.split('/')[3] === menuSubSub.path
                                          }
                                        >
                                          <Link
                                            to={`/${menu.path}/${menuSub.path}/${menuSubSub.path}`}
                                          >
                                            <span>{menuSubSub.label}</span>
                                          </Link>
                                        </SidebarMenuSubSubButton>
                                      </SidebarMenuSubSubItem>
                                    ))}
                                  </SidebarMenuSubSub>
                                </CollapsibleContent>
                              </Collapsible>
                            </SidebarMenuSubItem>
                          ) : (
                            <SidebarMenuSubItem key={menuSub.path}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={location.pathname.split('/')[2] === menuSub.path}
                              >
                                <Link to={`/${menu.path}/${menuSub.path}`}>
                                  <span>{menuSub.label}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={menu.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname.split('/')[1] === menu.path}
                  >
                    <Link to={menu.path}>
                      <div>
                        <img src={menu.icon} alt="" />
                      </div>
                      <span>{menu.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
          <SidebarPin />
        </Sidebar>
        <SidebarInset>
          <Outlet context={{ accessToken }} />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

type MenuItemType = {
  path: string;
  icon: string;
  label: string;
  children?: {
    path: string;
    label: string;
    children?: {
      path: string;
      label: string;
    }[];
  }[];
};

const menus: MenuItemType[] = [
  {
    path: 'service',
    icon: IconService,
    label: '서비스',
  },
  {
    path: 'workflow',
    icon: IconWorkflow,
    label: '워크플로우',
  },
  {
    path: 'model',
    icon: IconModel,
    label: '모델',
    children: [
      {
        path: 'model-catalog',
        label: '모델 카탈로그',
      },
      {
        path: 'custom-model',
        label: '커스텀 모델',
      },
    ],
  },
  {
    path: 'dataset',
    icon: IconDataset,
    label: '데이터셋',
  },
  {
    path: 'knowledge-base',
    icon: IconKnowledgeBase,
    label: '지식 기반',
  },
  {
    path: 'prompt',
    icon: IconPrompt,
    label: '프롬프트',
  },
  {
    path: 'learning',
    icon: IconLearning,
    label: '학습',
  },
  {
    path: 'dashboard',
    icon: IconDashboard,
    label: '대시보드',
  },
  {
    path: 'infra-management',
    icon: IconInfraManagement,
    label: '인프라 관리',
    children: [
      {
        path: 'cluster-management',
        label: '클러스터 관리',
      },
      {
        path: 'monitoring-dashboard',
        label: '모니터링 대시보드',
      },
      {
        path: 'event',
        label: '이벤트',
      },
      {
        path: 'application',
        label: '애플리케이션',
        children: [
          {
            path: 'catalog',
            label: '카탈로그',
          },
          {
            path: 'helm-release',
            label: '헬륨 릴리즈',
          },
          {
            path: 'helm-repository',
            label: '헬륨 저장소',
          },
        ],
      },
    ],
  },
  {
    path: 'member-management',
    icon: IconMemberManagement,
    label: '멤버 관리',
  },
];
