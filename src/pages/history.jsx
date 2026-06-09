import { useState, useEffect } from "react";
import {
  getHistory,
  deleteChat
} from "../services/historyApi";

import HistoryCard from "../components/HistoryCard";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await getHistory(page);
        setHistory(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadHistory();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deleteChat(id);

      const data = await getHistory(page);
      setHistory(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredHistory = history.filter((chat) =>
    (chat.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Chat History
      </h1>

      <input
        type="text"
        placeholder="Search chats..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          rounded-lg
          p-3
          mb-6
        "
      />

      {filteredHistory.map((chat) => (
        <HistoryCard
          key={chat.id}
          chat={chat}
          onOpen={(id) =>
            console.log(id)
          }
          onDelete={handleDelete}
        />
      ))}

      <div className="flex gap-3 mt-5">
        <button
          onClick={() =>
            setPage((prev) => prev - 1)
          }
          disabled={page === 1}
          className="
            bg-gray-300
            px-4
            py-2
            rounded
          "
        >
          Previous
        </button>

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
          className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default History;