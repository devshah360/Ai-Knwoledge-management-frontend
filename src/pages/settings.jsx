import { useState } from "react";

function Settings() {

  const [theme, setTheme] =
    useState(
      localStorage.getItem("theme") ||
      "light"
    );

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

    document.documentElement.classList.toggle(
      "dark"
    );
  };

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

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
          Toggle Theme
        </button>

      </div>

    </div>
  );
}

export default Settings;