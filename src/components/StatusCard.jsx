function StatusCard({
  title,
  status
}) {
  const healthy =
    status === "healthy";

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-5
      "
    >
      <h3
        className="
          font-bold
          mb-3
        "
      >
        {title}
      </h3>

      <div
        className={
          healthy
            ? "text-green-600 font-semibold"
            : "text-red-600 font-semibold"
        }
      >
        {healthy
          ? "🟢 Healthy"
          : "🔴 Down"}
      </div>
    </div>
  );
}

export default StatusCard;