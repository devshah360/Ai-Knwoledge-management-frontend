import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
   const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    localStorage.setItem(
      "theme",
      newTheme
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Settings
      </h1>

      <div
        className="
         flex gap-3 mt-4 flex-wrap
        "
      >

        <button
          onClick={changeTheme}
          className="
            bg-blue-600
            text-white
            px-5
            py-3
            rounded-lg
          "
        >
          {theme === "light"
            ? "Enable Dark Mode"
            : "Enable Light Mode"}
        </button>

        <button
              onClick={handleLogout}
              className="
                 bg-red-500 text-white px-3 py-2 rounded 
                      "
            >
              Logout
          </button>
      </div>
    </div>
  );
}

export default Settings;