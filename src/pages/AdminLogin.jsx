import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, ShieldAlert } from "lucide-react";

import { loginUser } from "../services/authApi";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(
        email,
        password
      );

      if (data.role !== "admin") {
        setError("Admin access required");
        return;
      }

      localStorage.setItem(
        "token",
        data.access_token
      );

      localStorage.setItem(
        "role",
        data.role
      );

      navigate("/admin");

    } catch (error) {
      setError("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-950
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
          shadow-2xl
        "
      >
        <div className="text-center mb-8">
          <div
            className="
              w-16
              h-16
              rounded-full
              bg-red-600
              flex
              items-center
              justify-center
              mx-auto
              mb-4
            "
          >
            <ShieldAlert
              size={30}
              className="text-white"
            />
          </div>

          <h1
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Admin Login
          </h1>

          <p className="text-slate-400 mt-2">
            Administrator Access Only
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                text-white
                p-4
                rounded-xl
                outline-none
                focus:border-red-500
              "
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                text-white
                p-4
                pr-12
                rounded-xl
                outline-none
                focus:border-red-500
              "
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
                absolute
                right-4
                top-4
                text-slate-400
              "
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {error && (
            <div
              className="
                bg-red-500/10
                border
                border-red-500/30
                text-red-400
                p-3
                rounded-xl
                mb-4
              "
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="
              w-full
              bg-red-600
              hover:bg-red-700
              text-white
              font-semibold
              py-4
              rounded-xl
              transition-all
            "
          >
            Sign In as Admin
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="
              text-blue-400
              hover:text-blue-300
            "
          >
            ← User Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;