import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <SidebarProvider>
      <App />
      <Toaster position="top-right" />
    </SidebarProvider>
  </ErrorBoundary>
);