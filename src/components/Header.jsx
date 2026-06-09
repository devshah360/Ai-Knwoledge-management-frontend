import { UserCircle } from "lucide-react";

function Header() {
  return (
    <div className = "bg-white shadow rounded-xl p-4 mb-5 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Knowledge Management</h2>
      <div className="flex items-center gap-3">
        <UserCircle size={32} />
        <div>
          <p className="text-xs text-gray-500">Adminstrator</p>
        </div>
      </div>
    </div>
  )
}

export default Header;










// import {
//   useNavigate
// } from "react-router-dom";

// function Header() {

//   const navigate =
//     useNavigate();

//   const logout = () => {

//     localStorage.removeItem(
//       "token"
//     );

//     localStorage.removeItem(
//       "role"
//     );

//     navigate("/login");
//   };

//   return (

//     <div
//       className="
//         flex
//         justify-end
//         mb-5
//       "
//     >

//       <button
//         onClick={logout}
//         className="
//           bg-red-500
//           text-white
//           px-4
//           py-2
//           rounded
//         "
//       >
//         Logout
//       </button>

//     </div>
//   );
// }

// export default Header;