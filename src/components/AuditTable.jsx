function AuditTable({ logs }) {
  return (
    <div className="overflow-x-auto">
      <table
        className="
          min-w-full
          bg-white
          rounded-xl
          shadow
        "
      >
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              ID
            </th>

            <th className="p-4 text-left">
              User ID
            </th>

            <th className="p-4 text-left">
              Action
            </th>

            <th className="p-4 text-left">
              Timestamp
            </th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.id}
              className="border-b"
            >
              <td className="p-4">
                {log.id}
              </td>

              <td className="p-4">
                {log.user_id}
              </td>

              <td className="p-4">
                {log.action}
              </td>

              <td className="p-4">
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