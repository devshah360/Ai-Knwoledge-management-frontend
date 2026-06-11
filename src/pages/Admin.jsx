import {
  useEffect,
  useState
} from "react";

import UserTable from "../components/UserTable";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../services/userApi";

function Admin() {

  const [users,
    setUsers] =
    useState([]);

  const loadUsers =
    async () => {

      const data =
        await getUsers();

      setUsers(data);
    };

  useEffect(() => {

    const fetchUsers =
      async () => {

        const data =
          await getUsers();

        setUsers(data);
      };

    fetchUsers();

  }, []);

  const handleDelete =
    async (id) => {

      await deleteUser(id);

      loadUsers();
    };

  const handleCreate =
    async () => {

      const name =
        prompt("Name");

      const email =
        prompt("Email");

      const role =
        prompt("Role");

      if (
        !name ||
        !email ||
        !role
      ) return;

      const obj={
        "username":name,
        "email": email,
        "password":role
      }

      await createUser(obj);

      loadUsers();
    };

  const handleEdit =
    async (user) => {

      const role =
        prompt(
          "New Role",
          user.role
        );

      if (!role) return;

      await updateUser(
        user.id,
        {
          role
        }
      );

      loadUsers();
    };

  return (

    <div>

      <div
        className="
          flex
          justify-between
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
          onClick={
            handleCreate
          }
          className="
            bg-blue-600
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
        onDelete={
          handleDelete
        }
      />

    </div>
  );
}

export default Admin;