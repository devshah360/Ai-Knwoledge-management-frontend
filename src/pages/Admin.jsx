import { useEffect, useState } from "react";

import UserTable from "../components/UserTable";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userApi";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const refreshUsers = async () => {
    try {
      const data = await getUsers();

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);

      await refreshUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async () => {
    const name = prompt("Enter Username");

    const email = prompt("Enter Email");

    const password = prompt("Enter Password");

    if (!name || !email || !password) return;

    try {
      await createUser({
        username: name,
        email: email,
        password: password,
      });

      await refreshUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (user) => {
    const role = prompt("New Role", user.role);

    if (!role) return;

    try {
      await updateUser(user.id, {
        role,
      });

      await refreshUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        className="
          flex
          justify-between
          items-center
          flex-wrap
          gap-4
          mb-8
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Admin Panel
          </h1>

          <p
            className="
              mt-2
              text-slate-500
              dark:text-slate-400
            "
          >
            Manage users and permissions.
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="
            px-6
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            transition
          "
        >
          Create User
        </button>
      </div>

      <div
        className="
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          rounded-2xl
          p-6
          shadow-sm
        "
      >
        <UserTable
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Admin;