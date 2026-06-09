import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { streamChat } from "../services/chatApi";

const TypingCursor = () => (
  <span
    className="
      animate-pulse
      ml-1
    "
  >
    |
  </span>
);

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userQuestion = question;

    const userMessage = {
      type: "user",
      content: userQuestion,
      timestamp: new Date(),
    };

    setQuestion("");

    let responseText = "";

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        type: "ai",
        content: "",
        timestamp: new Date(),
      },
    ]);

    setIsStreaming(true);

    try {
      await streamChat(userQuestion, (chunk) => {
        responseText += chunk;

        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: responseText,
          };

          return updated;
        });
      });
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`
              p-3
              rounded-lg
              ${
                message.type === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }
            `}
          >
            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>

            {message.type === "ai" &&
              isStreaming &&
              index === messages.length - 1 && (
                <TypingCursor />
              )}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          className="
            flex-1
            border
            rounded-lg
            px-4
            py-2
          "
          placeholder="Ask a question..."
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !isStreaming
            ) {
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          disabled={isStreaming}
          className="
            px-4
            py-2
            bg-blue-600
            text-white
            rounded-lg
            disabled:bg-gray-400
          "
        >
          {isStreaming
            ? "Thinking..."
            : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chat;