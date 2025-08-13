import { createContext, useContext, useState, type ReactNode } from "react";
import styles from "./sidebar.module.scss";

type SidebarContextProps = {
  isExpanded: boolean;
  isHovered: boolean;
  isPinned: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
  setIsHovered: (isHovered: boolean) => void;
  togglePin: (isPinned: boolean) => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");

  return context;
}

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const togglePin = (pinned: boolean) => {
    setIsPinned(pinned);
    if (pinned) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const contextValue: SidebarContextProps = {
    isExpanded,
    isHovered,
    isPinned,
    setIsExpanded,
    setIsHovered,
    togglePin,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={styles.sidebarProvider}>{children}</div>
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isExpanded, isHovered, isPinned, setIsHovered } = useSidebar();

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
      className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""} ${
        isHovered && !isPinned ? styles.hovered : ""
      } ${isPinned ? styles.pinned : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav>{children}</nav>
    </div>
  );
};

export const SidebarMenu = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.sidebarMenu}>{children}</ul>;
};

export const SidebarMenuItem = ({
  children,
  isActive = false,
}: {
  children: ReactNode;
  isActive?: boolean;
}) => {
  return (
    <li
      className={`${styles.sidebarMenuItem} ${isActive ? styles.active : ""}`}
    >
      {children}
    </li>
  );
};

export const SidebarMenuSub = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.sidebarMenuSub}>{children}</ul>;
};

export const SidebarMenuSubItem = ({ children }: { children: ReactNode }) => {
  return <li className={styles.sidebarMenuSubItem}>{children}</li>;
};

export const SidebarPin = () => {
  const { isPinned, togglePin, setIsExpanded } = useSidebar();

  const handleTogglePin = () => {
    const newPinned = !isPinned;
    togglePin(newPinned);
    if (!newPinned) {
      setIsExpanded(false);
    }
  };

  return (
    <button
      className={`${styles.sidebarPin} ${isPinned ? styles.pinned : ""}`}
      onClick={handleTogglePin}
      aria-label={isPinned ? "사이드바 고정 해제" : "사이드바 고정"}
    >
      <div className={styles.pinIcon}></div>
    </button>
  );
};

export const SidebarInset = ({ children }: { children: ReactNode }) => {
  return <div className={styles.sidebarInset}>{children}</div>;
};
