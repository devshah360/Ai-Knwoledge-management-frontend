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
import Search from "./pages/Search";
import RoleGuard from "./components/RoleGuard";
import Admin from "./pages/Admin";
import ActivityLogs from "./pages/ActivityLogs";
import Workflow from "./pages/Workflow";
import SystemMonitoring from "./pages/SystemMonitoring";
import AuditDashboard from "./pages/AuditDashboard";


function DashboardLayout() {
  return (
    <MainLayout>
      <div className="flex-1 p-5">
        <Header />
      </div>

      <div
        className="
    bg-white
    text-black
    min-h-screen
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
            path="/chat/history/:id"
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
            element={
              <ProtectedRoute>
                <ActivityLogs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/workflow"
            element={
              <ProtectedRoute>
                <Workflow />
              </ProtectedRoute>
            }
          />

          <Route
            path="/monitoring"
            element={
              <ProtectedRoute>
                <SystemMonitoring />
              </ProtectedRoute>
            }
          />

          <Route
            path="/audit"
            element={
              <ProtectedRoute>
                <AuditDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </MainLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
