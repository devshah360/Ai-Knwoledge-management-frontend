import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  getHistory,
  deleteChat,
} from "../services/historyApi";

import HistoryCard from "../components/HistoryCard";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const fetchHistory = async () => {
      try {
        const data = await getHistory();

        if (mounted) {
          setHistory(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();

    return () => {
      mounted = false;
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteChat(id);

      setHistory((prev) =>
        prev.filter((chat) => chat.id !== id)
      );
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
      <h1
        className="
          text-3xl
          font-bold
          mb-8

          text-slate-900
          dark:text-white
        "
      >
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

          px-5
          py-3

          mb-8

          rounded-2xl

          border

          border-slate-300

          bg-white

          text-slate-900

          placeholder:text-slate-400

          outline-none

          focus:ring-2
          focus:ring-blue-500

          dark:bg-slate-900
          dark:text-white
          dark:border-slate-700

          transition-all
        "
      />

      {filteredHistory.length === 0 ? (
        <div
          className="
            text-center

            mt-20

            text-slate-500

            dark:text-slate-400
          "
        >
          No chat history found.
        </div>
      ) : (
        <div className="space-y-5">
          {filteredHistory.map((chat) => (
            <HistoryCard
              key={chat.id}
              chat={chat}
              onOpen={(id) =>
                navigate(`/chat/history/${id}`)
              }
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default History;