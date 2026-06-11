import { useState, useEffect } from "react";

function Settings() {
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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Settings
      </h1>

      <div
        className="
          bg-white
          dark:bg-slate-800
          p-6
          rounded-xl
          shadow
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
      </div>
    </div>
  );
}

export default Settings;