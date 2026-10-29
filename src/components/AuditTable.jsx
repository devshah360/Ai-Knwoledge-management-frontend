function AuditTable({ logs }) {
  return (
    <div className="overflow-x-auto">
      <table
        className="
          min-w-full
          rounded-2xl
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
                font-semibold
                text-slate-700
                dark:text-slate-200
              "
            >
              ID
            </th>

            <th
              className="
                p-4
                text-left
                font-semibold
                text-slate-700
                dark:text-slate-200
              "
            >
              User ID
            </th>

            <th
              className="
                p-4
                text-left
                font-semibold
                text-slate-700
                dark:text-slate-200
              "
            >
              Action
            </th>

            <th
              className="
                p-4
                text-left
                font-semibold
                text-slate-700
                dark:text-slate-200
              "
            >
              Timestamp
            </th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.id}
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
                  font-medium
                "
              >
                #{log.id}
              </td>

              <td
                className="
                  p-4
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {log.user_id}
              </td>

              <td className="p-4">
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
                  {log.action}
                </span>
              </td>

              <td
                className="
                  p-4
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {new Date(
                  log.created_at
                ).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuditTable;