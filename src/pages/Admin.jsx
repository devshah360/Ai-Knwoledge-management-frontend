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
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load users");
      }
    };

    fetchUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
      alert("Failed to refresh users");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      await loadUsers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  const handleCreate = async () => {
    try {
      const username = prompt("Enter Username");

      if (!username) return;

      const email = prompt("Enter Email");

      if (!email) return;

      const password = prompt(
        "Enter Password\n\nPassword must contain:\n• 8+ characters\n• One uppercase letter\n• One lowercase letter\n• One number"
      );

      if (!password) return;

      const userData = {
        username,
        email,
        password,
      };

      await createUser(userData);

      alert("User created successfully");

      await loadUsers();
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.detail ||
          "Failed to create user"
      );
    }
  };

  const handleEdit = async (user) => {
    try {
      const role = prompt(
        "Enter New Role",
        user.role
      );

      if (!role) return;

      await updateUser(user.id, {
        role,
      });

      alert("Role updated successfully");

      await loadUsers();
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.detail ||
          "Failed to update user"
      );
    }
  };

  return (
    <div>
      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Admin Panel
        </h1>

        <button
          onClick={handleCreate}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-2
            rounded
          "
        >
          Create User
        </button>
      </div>

      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Admin;