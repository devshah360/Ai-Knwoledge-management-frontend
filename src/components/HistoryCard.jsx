function HistoryCard({
  chat,
  onOpen,
  onDelete,
}) {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900

        border
        border-slate-200
        dark:border-slate-700

        rounded-2xl
        shadow-sm

        p-6
        mb-5

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
        "
      >
        {chat.title}
      </h3>

      <p
        className="
          mt-2

          text-sm

          text-slate-500
          dark:text-slate-400
        "
      >
        {new Date(chat.created_at).toLocaleString()}
      </p>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => onOpen(chat.id)}
          className="
            px-5
            py-2.5

            rounded-xl

            bg-blue-600
            hover:bg-blue-700

            text-white
            font-medium

            transition
          "
        >
          Open
        </button>

        <button
          onClick={() => onDelete(chat.id)}
          className="
            px-5
            py-2.5

            rounded-xl

            bg-red-600
            hover:bg-red-700

            text-white
            font-medium

            transition
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HistoryCard;