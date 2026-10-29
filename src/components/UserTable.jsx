function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table
        className="
          w-full
          rounded-xl
          overflow-hidden
        "
      >
        <thead
          className="
            bg-slate-100
            dark:bg-slate-800
          "
        >
          <tr>
            <th
              className="
                p-4
                text-left
                text-slate-700
                dark:text-slate-200
                font-semibold
              "
            >
              Name
            </th>

            <th
              className="
                p-4
                text-left
                text-slate-700
                dark:text-slate-200
                font-semibold
              "
            >
              Email
            </th>

            <th
              className="
                p-4
                text-left
                text-slate-700
                dark:text-slate-200
                font-semibold
              "
            >
              Role
            </th>

            <th
              className="
                p-4
                text-center
                text-slate-700
                dark:text-slate-200
                font-semibold
              "
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="
                border-t
                border-slate-200
                dark:border-slate-700

                bg-white
                dark:bg-slate-900

                hover:bg-slate-50
                dark:hover:bg-slate-800

                transition
              "
            >
              <td
                className="
                  p-4
                  text-slate-800
                  dark:text-white
                "
              >
                {user.username}
              </td>

              <td
                className="
                  p-4
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {user.email}
              </td>

              <td
                className="
                  p-4
                "
              >
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium

                    bg-blue-100
                    text-blue-700

                    dark:bg-blue-900/40
                    dark:text-blue-300
                  "
                >
                  {user.role}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onEdit(user)}
                    className="
                      px-4
                      py-2
                      rounded-lg

                      bg-amber-500
                      hover:bg-amber-600

                      text-white
                      transition
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(user.id)}
                    className="
                      px-4
                      py-2
                      rounded-lg

                      bg-red-600
                      hover:bg-red-700

                      text-white
                      transition
                    "
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;