import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const sidebarRef = useRef();

  return (
    <main className="flex justify-center">
      <Sidebar ref={sidebarRef} />

      <div className="main-container flex flex-column">
        <Header sidebarRef={sidebarRef} />
        <div
          id="main-content"
          className="main-content flex flex-column justify-between p-25 gap-50"
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  );
}
