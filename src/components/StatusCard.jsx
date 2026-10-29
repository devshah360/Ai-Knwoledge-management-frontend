function StatusCard({
  title,
  status,
}) {
  const healthy =
    status === "running" ||
    status === "healthy" ||
    status === "up";

  return (
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
        hover:shadow-lg

        transition-all
      "
    >
      <h3
        className="
          text-lg
          font-semibold

          text-slate-900
          dark:text-white

          mb-5
        "
      >
        {title}
      </h3>

      <div className="flex items-center gap-3">
        <div
          className={`
            w-3
            h-3
            rounded-full
            ${
              healthy
                ? "bg-green-500"
                : "bg-red-500"
            }
          `}
        />

        <span
          className={`
            font-semibold
            ${
              healthy
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }
          `}
        >
          {healthy
            ? "Healthy"
            : "Down"}
        </span>
      </div>

      <p
        className="
          mt-4
          text-sm

          text-slate-500
          dark:text-slate-400
        "
      >
        Current Status: {status}
      </p>
    </div>
  );
}

export default StatusCard;