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

    localStorage.setItem("theme", theme);

  }, [theme]);



  const changeTheme = () => {

    setTheme((prev) =>

      prev === "light"

        ? "dark"

        : "light"

    );

  };



  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("role");

    navigate("/login");

  };



  return (

    <div>

      <h1

        className="

          text-3xl

          font-bold

          mb-8



          text-slate-900

          dark:text-white

        "

      >

        Settings

      </h1>



      <div

        className="

          bg-white

          dark:bg-slate-900



          border

          border-slate-200

          dark:border-slate-700



          rounded-2xl



          p-8



          shadow-sm

        "

      >



        {/* Theme Section */}

        <div

          className="

            flex

            justify-between

            items-center

            flex-wrap

            gap-5

          "

        >

          <div>

            <h2

              className="

                text-xl

                font-bold



                text-slate-900

                dark:text-white

              "

            >

              Theme

            </h2>



            <p

              className="

                mt-2



                text-slate-500

                dark:text-slate-400

              "

            >

              Switch between Light and Dark Mode

            </p>

          </div>



          <button

            onClick={changeTheme}

            className="

              px-6

              py-3



              rounded-xl



              bg-blue-600

              hover:bg-blue-700



              text-white



              font-medium



              transition

            "

          >

            {

              theme === "light"

              ?

              "🌙 Enable Dark Mode"

              :

              "☀️ Enable Light Mode"

            }

          </button>

        </div>



        <hr

          className="

            my-8



            border-slate-200

            dark:border-slate-700

          "

        />



        {/* Logout Section */}

        <div

          className="

            flex

            justify-between

            items-center

            flex-wrap

            gap-5

          "

        >

          <div>

            <h2

              className="

                text-xl

                font-bold



                text-slate-900

                dark:text-white

              "

            >

              Logout

            </h2>



            <p

              className="

                mt-2



                text-slate-500

                dark:text-slate-400

              "

            >

              Sign out from your account.

            </p>

          </div>



          <button

            onClick={handleLogout}

            className="

              px-6

              py-3



              rounded-xl



              bg-red-500

              hover:bg-red-600



              text-white



              font-medium



              transition

            "

          >

            Logout

          </button>

        </div>

      </div>

    </div>

  );

}

export default Settings;