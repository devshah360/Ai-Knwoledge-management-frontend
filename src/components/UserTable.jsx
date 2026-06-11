function UserTable({
  users,
  onEdit,
  onDelete
}) {

  return (

    <table className="w-full bg-white shadow rounded-xl">

      <thead>

        <tr className="border-b">

          <th className="p-3 text-left">
            Name
          </th>

          <th className="p-3 text-left">
            Email
          </th>

          <th className="p-3 text-left">
            Role
          </th>

          <th className="p-3">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {users.map(user => (

          <tr
            key={user.id}
            className="border-b"
          >

            <td className="p-3">
              {user.username}
            </td>

            <td className="p-3">
              {user.email}
            </td>

            <td className="p-3">
              {user.role}
            </td>

            <td className="p-3 flex gap-2">

              <button
                onClick={() =>
                  onEdit(user)
                }
                className="
                  bg-yellow-500
                  text-white
                  px-3
                  py-1
                  rounded
                "
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(user.id)
                }
                className="
                  bg-red-500
                  text-white
                  px-3
                  py-1
                  rounded
                "
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}

export default UserTable;