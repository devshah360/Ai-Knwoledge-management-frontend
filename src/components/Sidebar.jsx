import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  History,
  Settings,
  SearchIcon,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

function Sidebar() {
  const { collapsed } = useSidebar();

  const documents = ["company_policy.pdf", "employee_handbook.pdf", "faq.pdf"];

  return (
    <div
      className={`
        bg-slate-950
        text-white
        h-screen
        transition-all
        duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Header */}
      <div
        className="
          flex
          justify-between
          items-center
          p-4
        "
      >
        {!collapsed && <h1 className="font-bold text-xl">AI Assistant</h1>}
      </div>

      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        {!collapsed && (
          <h1 className="text-2xl font-bold text-blue-400">
            AI Knowledge Chatbot
          </h1>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            <LayoutDashboard size={20} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>
          {/* <FileText /> */}
          <NavLink to="/document">Documents</NavLink>
          <NavLink
            to="/upload"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            <Upload size={20} />
            {!collapsed && <span>Upload Documents</span>}
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            <MessageSquare size={20} />
            {!collapsed && <span>Chat</span>}
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            <History size={20} />
            {!collapsed && <span>History</span>}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </div>
        <div className="space-y-2">
          <NavLink
            to="/search"
            className="
      flex
      items-center
      gap-3
      px-4
      py-2
      rounded-lg
      hover:bg-gray-100
    "
          >
            <SearchIcon className="w-5 h-5" />
            <span>Search</span>
          </NavLink>

          <select
            className="
      w-full
      border
      rounded-lg
      px-3
      py-2
      text-sm
      
    "
          >
            <option>HR</option>
            <option>Finance</option>
          </select>
        </div>
        {/* Uploaded Documents */}
        {!collapsed && (
          <div className="mt-10">
            <h2 className="font-semibold mb-4">Uploaded Documents</h2>

            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-3 rounded-lg text-sm"
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
