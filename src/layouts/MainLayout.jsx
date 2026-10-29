import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";

function MainLayout({ children }) {

  const { collapsed } = useSidebar();

  return (

    <div
      className="
        min-h-screen

        bg-slate-50
        dark:bg-slate-950

        transition-colors
        duration-300
      "
    >

      <Sidebar />

      <main

        className={`
          min-h-screen

          transition-all
          duration-300

          ${collapsed ? "ml-20" : "ml-72"}
        `}

      >

        <div
          className="
            p-6
            lg:p-8
          "
        >

          {children}

        </div>

      </main>

    </div>

  );

}

export default MainLayout;