import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

const SIDEBAR_MIN_WIDTH = 52;
const SIDEBAR_MAX_WIDTH = 304;
const SIDEBAR_DEFAULT_WIDTH = 232;
const RESIZE_HANDLE_WIDTH = 10;

type SidebarContextProps = {
  isHovered: boolean;
  isPinned: boolean;
  width: number;
  isResizing: boolean;
  setIsHovered: (isHovered: boolean) => void;
  togglePin: () => void;
  setWidth: (width: number) => void;
  setIsResizing: (resizing: boolean) => void;
  startResize: (e: React.MouseEvent) => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");

  return context;
}

interface SidebarProviderProps {
  children: ReactNode;
  minWidth?: number;
  maxWidth?: number;
  defaultWidth?: number;
}

export const SidebarProvider = ({
  children,
  minWidth = SIDEBAR_MIN_WIDTH,
  maxWidth = SIDEBAR_MAX_WIDTH,
  defaultWidth = SIDEBAR_DEFAULT_WIDTH,
}: SidebarProviderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);

  const togglePin = () => {
    setIsPinned(!isPinned);
    setIsHovered(false);
  };

  const startResize = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);

      const startX = e.clientX;
      const startWidth = width;

      const handleMouseMove = (e: MouseEvent) => {
        const newWidth = Math.min(
          Math.max(startWidth + (e.clientX - startX), minWidth),
          maxWidth,
        );
        setWidth(newWidth);
      };

      const handleMouseUp = (e: MouseEvent) => {
        setIsResizing(false);

        // 리사이즈 종료 후 마우스가 사이드바 영역에 있는지 확인
        const sidebarElement = document.querySelector("[data-sidebar]");
        if (sidebarElement) {
          const rect = sidebarElement.getBoundingClientRect();
          const isMouseInSidebar =
            e.clientX >= rect.left &&
            e.clientX <= rect.right + RESIZE_HANDLE_WIDTH &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

          setIsHovered(isMouseInSidebar);
        }

        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [width, minWidth, maxWidth],
  );

  const contextValue: SidebarContextProps = {
    isHovered,
    isPinned,
    width,
    isResizing,
    setIsHovered,
    togglePin,
    setWidth,
    setIsResizing,
    startResize,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className="flex">{children}</div>
    </SidebarContext.Provider>
  );
};

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Sidebar = ({ children, ...props }: SidebarProps) => {
  const { isPinned, isHovered, width, isResizing, startResize, setIsHovered } =
    useSidebar();

  const handleMouseEnter = useCallback(() => {
    if (!isPinned) {
      setIsHovered(true);
    }
  }, [isPinned]);

  const handleMouseLeave = useCallback(() => {
    if (!isPinned) {
      setIsHovered(false);
    }
  }, [isPinned]);

  const currentWidth = isPinned || isHovered ? width : SIDEBAR_MIN_WIDTH;

  return (
    <div
      data-sidebar
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group fixed top-[60px] left-0 z-50 h-[calc(100vh-60px)] border-r border-[#e8e8e8] bg-[#f9f9f9] transition-[width_0.1s_ease-in-out] ${isPinned || isHovered ? "w-[232px]" : "w-[52px]"}`}
      style={{
        width: `${currentWidth}px`,
        transition: isResizing ? "none" : "width 0.1s ease-in-out",
      }}
    >
      <nav className="p-1.5" {...props}>
        {children}
      </nav>
      {(isPinned || isHovered) && (
        <div
          className="group/resize absolute top-0 -right-2.5 h-full w-2.5 cursor-col-resize transition-colors duration-200"
          onMouseDown={startResize}
        >
          <div className="h-full w-0.5 bg-transparent group-hover/resize:bg-[#b8b8b8] group-active/resize:bg-[#b8b8b8]" />
        </div>
      )}
      {isResizing && <div className="fixed inset-0 z-10 cursor-col-resize" />}
    </div>
  );
};

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const SidebarMenu = ({ children, ...props }: SidebarMenuProps) => {
  return (
    <ul className="space-y-1" {...props}>
      {children}
    </ul>
  );
};

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export const SidebarMenuItem = ({
  children,
  ...props
}: SidebarMenuItemProps) => {
  return (
    <li
      className="[&_span]:block [&_span]:flex-1 [&_span]:truncate [&_span]:text-left [&_span]:transition-[width_0.6s_ease-in-out]"
      {...props}
    >
      {children}
    </li>
  );
};

interface SidebarMenuButtonProps {
  children: ReactNode;
  isActive?: boolean;
  asChild?: boolean;
}

export const SidebarMenuButton = ({
  children,
  isActive = false,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) => {
  const { isPinned, width } = useSidebar();

  if (asChild) {
    return (
      <div
        className={`rounded-sm hover:bg-[#e8e8e8] [&_span]:text-xs [&_span]:tracking-[-0.5px] [&_span]:text-[#525252] [&_span]:group-hover:block [&_svg]:size-6 [&_svg]:opacity-65 [&>a]:relative [&>a]:flex [&>a]:size-full [&>a]:items-center [&>a]:gap-1 [&>a]:p-2 ${
          isActive
            ? "[&_span]:!font-semibold [&_span]:!text-[#1a1a1a] [&_svg]:!opacity-100 [&>a]:rounded-sm [&>a]:bg-[#e8e8e8]"
            : ""
        } ${isPinned ? "[&_span]:block" : "[&_span]:hidden"}`}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      className={`relative flex size-full items-center gap-1 truncate rounded-sm p-2 hover:bg-[#e8e8e8] [&_svg]:opacity-65 [&>span]:text-xs [&>span]:tracking-[-0.5px] [&>span]:text-[#525252] group-hover:[&>span]:block [&>svg]:size-6 ${
        isActive
          ? "bg-[#e8e8e8] [&_svg]:!opacity-100 [&>span]:!font-semibold [&>span]:!text-[#1a1a1a]"
          : ""
      } ${isPinned ? "[&_span]:block" : "[&>span]:hidden"} ${width > SIDEBAR_MIN_WIDTH ? "group-hover:bg-transparent" : ""}`}
      {...props}
    >
      {width > SIDEBAR_MIN_WIDTH && (
        <i
          className={`absolute top-[45%] right-3 size-[7px] -translate-y-1/2 rotate-45 border-r border-b border-[#999] group-hover:block group-data-[state=open]/collapsible:top-[55%] group-data-[state=open]/collapsible:rotate-[225deg] ${isPinned ? "block" : "hidden"}`}
        />
      )}
      {children}
    </button>
  );
};

interface SidebarMenuSubProps extends React.HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const SidebarMenuSub = ({ children, ...props }: SidebarMenuSubProps) => {
  return (
    <ul className="my-1 space-y-1" {...props}>
      {children}
    </ul>
  );
};

interface SidebarMenuSubItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export const SidebarMenuSubItem = ({
  children,
  ...props
}: SidebarMenuSubItemProps) => {
  return <li {...props}>{children}</li>;
};

interface SidebarMenuSubButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
  asChild?: boolean;
}

export const SidebarMenuSubButton = ({
  children,
  isActive = false,
  asChild = false,
  ...props
}: SidebarMenuSubButtonProps) => {
  const { isPinned, width } = useSidebar();

  if (width <= SIDEBAR_MIN_WIDTH) return null;

  if (asChild) {
    return (
      <div
        className={`rounded-sm group-hover:block hover:bg-[#e8e8e8] [&_span]:text-xs [&_span]:tracking-[-0.5px] [&_span]:text-[#525252] hover:[&_span]:font-semibold hover:[&_span]:text-[#1a1a1a] [&_svg]:size-6 [&_svg]:opacity-65 [&>a]:relative [&>a]:flex [&>a]:size-full [&>a]:h-10 [&>a]:items-center [&>a]:gap-1 [&>a]:p-2 [&>a]:pl-9 ${
          isActive
            ? "bg-[#e8e8e8] [&_span]:!font-semibold [&_span]:!text-[#1a1a1a]"
            : ""
        } ${isPinned ? "block" : "hidden"}`}
      >
        {children}
      </div>
    );
  }

  return <button {...props}>{children}</button>;
};

export const SidebarPin = () => {
  const { isPinned, togglePin } = useSidebar();

  return (
    <button
      onClick={togglePin}
      aria-label={isPinned ? "사이드바 고정 해제" : "사이드바 고정"}
      className={`absolute top-4 -right-2.5 z-20 hidden size-5 rounded-[50%] border border-[#888] bg-white transition-[opacity_0.3s_ease-in-out] group-hover:block hover:border-[#1a1a1a] hover:!bg-[#1a1a1a] hover:[&>i]:border-white`}
    >
      <i
        className={`mr-0.5 mb-0.5 inline-block size-[5px] -rotate-45 transform border-r border-b border-[#999] ${isPinned ? "mb-0.5 ml-1 rotate-[135deg]" : ""}`}
      />
    </button>
  );
};

interface SidebarInsetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SidebarInset = ({ children, ...props }: SidebarInsetProps) => {
  const { isPinned, width, isResizing } = useSidebar();

  return (
    <div
      className={`relative z-0 mt-[60px] size-full min-w-[1700px]`}
      style={{
        marginLeft: `${isPinned ? width : SIDEBAR_MIN_WIDTH}px`,
        transition: isResizing ? "none" : "width 0.1s ease-in-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
};
