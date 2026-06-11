function DocumentCard({
  document,
  onDelete,
  onRename,
  onReindex,
  onOpen,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-4">
      <h2 className="text-lg font-bold">
        {document.filename}
      </h2>

      <div className="mt-3">
        <p>Type: {document.filetype}</p>
        <p>Owner: {document.owner_id}</p>
      </div>

      <div className="flex gap-3 mt-4 flex-wrap">
        <button
          onClick={() => onOpen(document)}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          Open PDF
        </button>

        <button
          onClick={() => onRename(document)}
          className="bg-yellow-500 text-white px-3 py-2 rounded"
        >
          Rename
        </button>

        <button
          onClick={() => onReindex(document.id)}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Re-Index
        </button>

        <button
          onClick={() => onDelete(document.id)}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DocumentCard;