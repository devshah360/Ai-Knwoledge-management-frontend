function HistoryCard({
        chat,
        onOpen,
        onDelete
})
{
        return (
                <div className="bg-white shadow rounded-xl p-5 mb-4">
                        <h3 className="font-bold">{chat.title}</h3>
                        <p className="text-gray-500 mt-2">{chat.created_at}</p>
                        <div className="mt-4 flex gap=3">
                                <button onClick={() => 
                                        onOpen(chat.id)
                                }
                                className = "bg-blue-600 text-white px-4 py-2 rounded-lg">Open
                                </button>
                                <button onClick={() => 
                                        onDelete(chat.id)
                                }
                                className = "bg-blue-500 text-white px-4 py-2 rounded-lg">Delete
                                </button>
                        </div>
                </div>
        );
}
export default HistoryCard