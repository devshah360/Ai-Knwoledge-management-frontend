import {
  useNavigate
} from "react-router-dom";

function Header() {

  const navigate =
    useNavigate();

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "role"
    );

    navigate("/login");
  };

  return (

    <div
      className="
        flex
        justify-end
        mb-5
      "
    >

      <button
        onClick={logout}
        className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded
        "
      >
        Logout
      </button>

    </div>
  );
}

export default Header;