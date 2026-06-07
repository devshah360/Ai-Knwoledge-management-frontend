import { useState } from "react";
import api from "../services/api";

function Chat() {

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [sources, setSources] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async () => {

    if (!question.trim()) return;

    const userMessage = {
      type: "user",
      content: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {

      setLoading(true);

      const response =
        await api.post("/chat", {
          question,
        });

      const aiMessage = {
        type: "ai",
        content:
          response.data.answer,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setSources(
        response.data.sources || []
      );

      setQuestion("");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="flex gap-5 h-[85vh]">

      {/* Chat Area */}

      <div className="flex-1 bg-white rounded-xl shadow flex flex-col">

        <div className="p-5 border-b">

          <h2 className="text-xl font-bold">
            Chat with your documents
          </h2>

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto p-5">

          {messages.map(
            (message, index) => (

              <div
                key={index}
                className={`mb-5 flex ${
                  message.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[70%] p-4 rounded-xl ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {message.content}
                </div>

              </div>

            )
          )}

          {loading && (

            <div className="bg-gray-100 p-4 rounded-xl w-fit">
              Thinking...
            </div>

          )}

        </div>

        {/* Input */}

        <div className="p-4 border-t flex gap-3">

          <input
            type="text"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            placeholder="Ask a question..."
            className="
              flex-1
              border
              rounded-lg
              px-4
              py-3
            "
          />

          <button
            onClick={sendMessage}
            className="
              bg-blue-600
              text-white
              px-6
              rounded-lg
            "
          >
            Send
          </button>

        </div>

      </div>

      {/* Sources Panel */}

      <div
        className="
          w-72
          bg-white
          rounded-xl
          shadow
          p-5
        "
      >

        <h3 className="font-bold text-lg mb-5">
          Sources Used
        </h3>

        {sources.length === 0 && (
          <p>No sources yet</p>
        )}

        {sources.map(
          (source, index) => (

            <div
              key={index}
              className="
                border
                rounded-lg
                p-3
                mb-3
              "
            >

              <p className="font-semibold">
                {source.document}
              </p>

              <p>
                Page {source.page}
              </p>

              <p>
                Score:
                {" "}
                {source.score}
              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default Chat;