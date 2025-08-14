import { createContext, useContext, useState, type ReactNode } from "react";

type SidebarContextProps = {
  isHovered: boolean;
  isPinned: boolean;
  setIsHovered: (isHovered: boolean) => void;
  togglePin: () => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");

  return context;
}

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const togglePin = () => {
    setIsPinned(!isPinned);
    if (!isPinned) {
      setIsHovered(false);
    }
  };

  const contextValue: SidebarContextProps = {
    isHovered,
    isPinned,
    setIsHovered,
    togglePin,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className="flex">{children}</div>
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isPinned, isHovered, setIsHovered } = useSidebar();

  const handleMouseEnter = () => {
    if (!isPinned) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setIsHovered(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group fixed top-[60px] left-0 z-50 h-[calc(100vh-60px)] border-r border-[#e8e8e8] bg-[#f9f9f9] ${isPinned || isHovered ? "w-[232px]" : "w-[53px]"}`}
    >
      <nav className="p-1.5">{children}</nav>
    </div>
  );
};

export const SidebarMenu = ({ children }: { children: ReactNode }) => {
  return <ul className="space-y-1">{children}</ul>;
};

export const SidebarMenuItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="[&_span]:block [&_span]:flex-1 [&_span]:truncate [&_span]:text-left">
      {children}
    </li>
  );
};

export const SidebarMenuButton = ({
  children,
  isActive = false,
  asChild = false,
}: {
  children: ReactNode;
  isActive?: boolean;
  asChild?: boolean;
}) => {
  const { isPinned } = useSidebar();

  if (asChild) {
    return (
      <div
        className={`rounded-sm hover:bg-[#e8e8e8] [&_span]:text-xs [&_span]:tracking-[-0.5px] [&_span]:text-[#525252] [&_span]:group-hover:block [&_svg]:size-6 [&_svg]:opacity-65 [&>a]:relative [&>a]:flex [&>a]:size-full [&>a]:items-center [&>a]:gap-1 [&>a]:p-2 ${
          isActive
            ? "[&_span]:text-[#1a1a1a] [&_svg]:opacity-100 [&>a]:bg-[#e8e8e8]"
            : ""
        } ${isPinned ? "[&_span]:block" : "[&_span]:hidden"}`}
      >
        {children}
      </div>
    );
  }

  return <div>{children}</div>;
};

export const SidebarMenuSub = ({ children }: { children: ReactNode }) => {
  return <ul>{children}</ul>;
};

export const SidebarMenuSubItem = ({ children }: { children: ReactNode }) => {
  return <li>{children}</li>;
};

export const SidebarMenuSubButton = ({
  children,
  isActive = false,
  asChild = false,
  ...props
}: {
  children: ReactNode;
  isActive?: boolean;
  asChild?: boolean;
}) => {
  const { isPinned } = useSidebar();

  if (asChild) {
    return (
      <div
        className={`rounded-sm group-hover:block hover:bg-[#e8e8e8] [&_span]:text-xs [&_span]:tracking-[-0.5px] [&_span]:text-[#525252] hover:[&_span]:font-semibold hover:[&_span]:text-[#1a1a1a] [&_svg]:size-6 [&_svg]:opacity-65 [&>a]:relative [&>a]:flex [&>a]:size-full [&>a]:h-10 [&>a]:items-center [&>a]:gap-1 [&>a]:p-2 [&>a]:pl-9 ${isPinned ? "block" : "hidden"}`}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      className={`relative flex size-full items-center gap-1 rounded-sm p-2 hover:bg-[#e8e8e8] [&_svg]:opacity-65 [&>span]:text-xs [&>span]:tracking-[-0.5px] [&>span]:text-[#525252] group-hover:[&>span]:block [&>svg]:size-6 ${
        isActive
          ? "[&>a]:bg-[#e8e8e8] [&>span]:text-[#1a1a1a] [&>svg]:opacity-100"
          : ""
      } ${isPinned ? "[&_span]:block" : "[&>span]:hidden"}`}
      {...props}
    >
      {children}
      <i
        className={`absolute top-[45%] right-3 size-[7px] -translate-y-1/2 rotate-45 border-r border-b border-[#999] group-hover:block ${isPinned ? "block" : "hidden"}`}
      />
    </button>
  );
};

export const SidebarPin = () => {
  const { isPinned, togglePin } = useSidebar();

  return (
    <button
      onClick={togglePin}
      aria-label={isPinned ? "사이드바 고정 해제" : "사이드바 고정"}
      className={`absolute top-4 -right-2.5 hidden size-5 rounded-[50%] border border-[#888] bg-white group-hover:block hover:border-[#1a1a1a] hover:!bg-[#1a1a1a] hover:[&>i]:border-white ${isPinned ? "" : ""}`}
    >
      <i
        className={`mr-0.5 mb-0.5 inline-block size-[5px] -rotate-45 transform border-r border-b border-[#999] ${isPinned ? "mb-0.5 ml-1 rotate-[135deg]" : ""}`}
      />
    </button>
  );
};

export const SidebarInset = ({ children }: { children: ReactNode }) => {
  const { isPinned } = useSidebar();
  
  return (
    <div className={`relative z-0 mt-[60px] size-full min-w-[1700px] ${isPinned ? "ml-[232px]" : "ml-[52px]"}`}>
      {children}
    </div>
  );
};
