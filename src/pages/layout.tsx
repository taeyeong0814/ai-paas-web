import { Header } from "../components/layout/header";
import { Sidebar } from "../components/layout/sidebar";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="layout-container">
        <Sidebar />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
