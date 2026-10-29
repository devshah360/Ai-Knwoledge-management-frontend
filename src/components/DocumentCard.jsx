function DocumentCard({
  document,
  onDelete,
  onRename,
  onReindex,
  onOpen,
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

        p-6

        shadow-sm
        hover:shadow-lg

        transition-all
      "
    >

      <h2
        className="
          text-xl
          font-bold

          text-slate-900
          dark:text-white
        "
      >
        {document.filename}
      </h2>

      <div
        className="
          mt-4
          space-y-2

          text-slate-600
          dark:text-slate-300
        "
      >
        <p>
          <span className="font-semibold">
            Type:
          </span>{" "}
          {document.filetype}
        </p>

        <p>
          <span className="font-semibold">
            Owner:
          </span>{" "}
          {document.owner_id}
        </p>
      </div>


      <div
        className="
          flex

          flex-wrap

          gap-3

          mt-6
        "
      >

        <button
          onClick={() =>
            onOpen(document)
          }

          className="
            px-4
            py-2

            rounded-xl

            bg-green-600

            hover:bg-green-700

            text-white

            transition
          "
        >
          Open PDF
        </button>


        <button
          onClick={() =>
            onRename(document)
          }

          className="
            px-4
            py-2

            rounded-xl

            bg-yellow-500

            hover:bg-yellow-600

            text-white

            transition
          "
        >
          Rename
        </button>


        <button
          onClick={() =>
            onReindex(document.id)
          }

          className="
            px-4
            py-2

            rounded-xl

            bg-blue-600

            hover:bg-blue-700

            text-white

            transition
          "
        >
          Re-Index
        </button>


        <button
          onClick={() =>
            onDelete(document.id)
          }

          className="
            px-4
            py-2

            rounded-xl

            bg-red-500

            hover:bg-red-600

            text-white

            transition
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default DocumentCard;