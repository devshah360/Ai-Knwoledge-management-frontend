function ActivityTimeline({
  logs
}) {
  return (
    <div className="space-y-4">
      {logs.map((log) => (
        <div
          key={log.id}
          className="
            border-l-4
            border-blue-500
            pl-4
          "
        >
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            {new Date(
              log.created_at
            ).toLocaleString()}
          </p>

          <p className="font-medium">
            User #{log.user_id}
          </p>

          <p>
            {log.action}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ActivityTimeline;