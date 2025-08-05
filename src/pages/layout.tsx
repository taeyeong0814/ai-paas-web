import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
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
