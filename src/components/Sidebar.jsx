import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  History,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const documents = [
    "company_policy.pdf",
    "employee_handbook.pdf",
    "faq.pdf"
  ];

  return (
    <div className="w-72 h-screen bg-slate-950 text-white flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-blue-400">
          AI Knowledge Chatbot
        </h1>

      </div>

      {/* Menu */}

      <div className="flex-1 p-4">

        <div className="space-y-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Upload size={20} />
            Upload Documents
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <MessageSquare size={20} />
            Chat
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <History size={20} />
            History
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink>

        </div>

        {/* Uploaded Documents */}

        <div className="mt-10">

          <h2 className="font-semibold mb-4">
            Uploaded Documents
          </h2>

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

      </div>

    </div>
  );
}

export default Sidebar;