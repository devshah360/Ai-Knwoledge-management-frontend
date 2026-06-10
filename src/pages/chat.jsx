import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { streamChat } from "../services/chatApi";

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim() || isLoading) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content: userQuestion,
        timestamp: new Date(),
      },
    ]);

    setQuestion("");
    setIsLoading(true);

    try {
      await streamChat(
        userQuestion,
        (answer) => {
          setMessages((prev) => [
            ...prev,
            {
              type: "ai",
              content: answer,
              timestamp: new Date(),
            },
          ]);
        }
      );
    } catch (error) {
      console.error(
        "Chat error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content:
            "Sorry, something went wrong.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={`
                p-3
                rounded-lg
                max-w-[80%]
                ${
                  message.type === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-100 text-black"
                }
              `}
            >
              <ReactMarkdown>
                {message.content}
              </ReactMarkdown>
            </div>
          )
        )}

        {isLoading && (
          <div
            className="
              p-3
              rounded-lg
              bg-gray-100
              text-black
              max-w-[80%]
            "
          >
            Thinking...
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4 p-4">
        <input
          type="text"
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
          placeholder="Ask a question..."
          className="
            flex-1
            border
            rounded-lg
            px-4
            py-2
          "
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !isLoading
            ) {
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="
            px-4
            py-2
            bg-blue-600
            text-white
            rounded-lg
            disabled:bg-gray-400
          "
        >
          {isLoading
            ? "Thinking..."
            : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chat;