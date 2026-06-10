import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import UploadDocuments from "./pages/UploadDocuments";
import Documents from "./pages/Document";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import { Search } from "lucide-react";
import RoleGuard from "./components/RoleGuard";
import Admin from "./pages/Admin";
import ActivityLogs from "./pages/ActivityLogs";
import Workflow from "./pages/Workflow";
import SystemMonitoring from "./pages/SystemMonitoring";
import AuditDashboard from "./pages/AuditDashboard";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className="flex-1 p-5">
          <Header />
        </div>

        <div
          className="
            min-h-screen
            bg-white
            text-black
            dark:bg-gray-900
            dark:text-white
          "
        >
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/documents"
              element={
                <ProtectedRoute>
                  <Documents />
                </ProtectedRoute>
              }
            />

            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <UploadDocuments />
                </ProtectedRoute>
              }
            />

            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />

            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <RoleGuard role="admin">
                    <Admin />
                  </RoleGuard>
                </ProtectedRoute>
              }
            />

            <Route
              path="/activity-logs"
              element={<ActivityLogs />}
            />

            <Route
              path="/workflow"
              element={<Workflow />}
            />

            <Route
              path="/monitoring"
              element={<SystemMonitoring />}
            />

            <Route
              path="/audit"
              element={<AuditDashboard />}
            />

            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;