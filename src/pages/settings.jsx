import { useState } from "react";

function Settings() {

  const [theme, setTheme] =
    useState(
      localStorage.getItem("theme") ||
      "light"
    );

  const changeTheme = () => {
    console.log("Hello");
    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);
    console.log("just");
    localStorage.setItem(
      "theme",
      newTheme
    );

    document.documentElement.classList.toggle(
      "dark"
    );
     console.log("byr");
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

        {/* <button onClick={console.log("bye")}>
            bye
        </button> */}

      </div>

    </div>
  );
}

export default Settings;