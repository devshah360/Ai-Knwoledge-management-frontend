import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(
        email,
        password
      );

      localStorage.setItem(
        "token",
        data.access_token
      );

      localStorage.setItem(
        "role",
        data.role
      );

      if (data.role === "admin"){
        navigate("/admin")
      }
      else{
      navigate("/");
    }
    } catch {
      setError(
        "Invalid credentials"
      );
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#171717]
        text-white
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1
            className="
              text-5xl
              font-semibold
              mb-4
            "
          >
            AI Knowledge
          </h1>

          <p
            className="
              text-gray-400
              text-lg
            "
          >
            Log in to continue
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
              w-full
              h-14
              bg-transparent
              border
              border-gray-700
              rounded-full
              px-6
              outline-none
              focus:border-green-500
            "
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
              w-full
              h-14
              bg-transparent
              border
              border-gray-700
              rounded-full
              px-6
              outline-none
              focus:border-green-500
            "
            required
          />

          {error && (
            <div
              className="
                bg-red-500/10
                border
                border-red-500
                text-red-400
                rounded-xl
                p-3
              "
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="
              w-full
              h-14
              bg-white
              text-black
              rounded-full
              font-medium
              hover:bg-gray-200
              transition
            "
          >
            Continue
          </button>
        </form>

        <div
          className="
            mt-10
            text-center
            text-sm
            text-gray-500
          "
        >
          AI Knowledge Management System
        </div>
      </div>
    </div>
  );
}

export default Login;