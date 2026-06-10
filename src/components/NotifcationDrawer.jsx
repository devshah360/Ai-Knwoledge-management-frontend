function NotificationDrawer({
  notifications,
  open
}) {

  if (!open) return null;

  return (
    <div
      className="
        absolute
        right-0
        top-12
        w-96
        bg-white
        shadow-xl
        rounded-xl
        p-4
        z-50
      "
    >
      <h3 className="font-bold mb-4">
        Notifications
      </h3>

      {notifications.map(
        notification => (
          <div
            key={notification.id}
            className="
              border-b
              py-3
            "
          >
            <p>
              {notification.message}
            </p>

            <span
              className="
                text-xs
                text-gray-500
              "
            >
              {
                new Date(
                  notification.timestamp
                ).toLocaleString()
              }
            </span>
          </div>
        )
      )}
    </div>
  );
}

export default NotificationDrawer;