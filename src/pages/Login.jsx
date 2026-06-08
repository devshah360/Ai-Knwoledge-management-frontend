import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser }
from "../services/authApi";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate =
    useNavigate();

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await loginUser(
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

        navigate("/");

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
        flex
        items-center
        justify-center
        bg-slate-100
      "
    >

      <form
        onSubmit={handleLogin}
        className="
          bg-white
          p-8
          rounded-xl
          shadow
          w-96
        "
      >

        <h1
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-4
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-4
          "
        />

        {error && (

          <p className="text-red-500 mb-3">
            {error}
          </p>

        )}

        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            text-white
            p-3
            rounded-lg
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;