import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  History,
  Settings,
  Search,
  FileText,
  Activity,
  Workflow,
  ShieldCheck,
  Monitor,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

function Sidebar() {
  const { collapsed } = useSidebar();

  const documents = [
    "company_policy.pdf",
    "employee_handbook.pdf",
    "faq.pdf",
  ];

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
     ${
       isActive
         ? "bg-blue-600 text-white shadow-lg"
         : "text-slate-300 hover:bg-slate-800 hover:text-white"
     }`;

  return (
    <aside
      className={`
        bg-slate-950
        border-r border-slate-800
        text-white
        h-screen
        flex flex-col
        transition-all duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Brand */}
      <div className="px-6 py-6 border-b border-slate-800">
        {!collapsed && (
          <>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
              AI Assistant
            </p>

            <h1 className="text-2xl font-bold text-blue-400 leading-tight">
              AI Knowledge
              <br />
              Chatbot
            </h1>
          </>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5">
        {/* MAIN MENU */}
        <div>
          {!collapsed && (
            <p className="text-xs uppercase text-slate-500 mb-3 px-2">
              Main Menu
            </p>
          )}

          <div className="space-y-2">
            <NavLink to="/" className={navClass}>
              <LayoutDashboard size={20} />
              {!collapsed && <span>Dashboard</span>}
            </NavLink>

            <NavLink to="/documents" className={navClass}>
              <FileText size={20} />
              {!collapsed && <span>Documents</span>}
            </NavLink>

            <NavLink to="/upload" className={navClass}>
              <Upload size={20} />
              {!collapsed && <span>Upload Documents</span>}
            </NavLink>

            <NavLink to="/chat" className={navClass}>
              <MessageSquare size={20} />
              {!collapsed && <span>Chat</span>}
            </NavLink>

            <NavLink to="/history" className={navClass}>
              <History size={20} />
              {!collapsed && <span>History</span>}
            </NavLink>

            <NavLink to="/search" className={navClass}>
              <Search size={20} />
              {!collapsed && <span>Search</span>}
            </NavLink>
          </div>
        </div>

        {/* ADMIN */}
        <div className="mt-8">
          {!collapsed && (
            <p className="text-xs uppercase text-slate-500 mb-3 px-2">
              Management
            </p>
          )}

          <div className="space-y-2">
            <NavLink to="/activity-logs" className={navClass}>
              <Activity size={20} />
              {!collapsed && <span>Activity Logs</span>}
            </NavLink>

            <NavLink to="/workflow" className={navClass}>
              <Workflow size={20} />
              {!collapsed && <span>Workflow</span>}
            </NavLink>

            <NavLink to="/monitoring" className={navClass}>
              <Monitor size={20} />
              {!collapsed && <span>Monitoring</span>}
            </NavLink>

            {localStorage.getItem("role") === "admin" && (
              <>
                <NavLink to="/admin" className={navClass}>
                  <ShieldCheck size={20} />
                  {!collapsed && <span>Admin</span>}
                </NavLink>

                <NavLink to="/audit" className={navClass}>
                  <History size={20} />
                  {!collapsed && <span>Audit Logs</span>}
                </NavLink>
              </>
            )}

            <NavLink to="/settings" className={navClass}>
              <Settings size={20} />
              {!collapsed && <span>Settings</span>}
            </NavLink>
          </div>
        </div>

        {/* DEPARTMENT */}
        {!collapsed && (
          <div className="mt-8">
            <label className="text-xs uppercase text-slate-500 block mb-3">
              Department
            </label>

            <select
              className="
                w-full
                bg-slate-900
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-sm
                text-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>HR</option>
              <option>Finance</option>
            </select>
          </div>
        )}

        {/* DOCUMENTS */}
        {!collapsed && (
          <div className="mt-8">
            <h3 className="text-xs uppercase text-slate-500 mb-4">
              Uploaded Documents
            </h3>

            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-900
                    border border-slate-800
                    rounded-xl
                    p-3
                    text-sm
                    text-slate-300
                    hover:bg-slate-800
                    transition
                    cursor-pointer
                  "
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;