import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";

function MainLayout({ children }) {
  const { collapsed } = useSidebar();

  return (
    <div
      className="
        h-screen
        bg-slate-100
        dark:bg-slate-950
        transition-colors
        overflow-hidden
      "
    >
      <Sidebar />

      <main
        className={`
          h-screen
          overflow-y-auto
          transition-all duration-300
          ${collapsed ? "ml-20" : "ml-72"}
        `}
      >
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;