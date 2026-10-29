import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { streamChat } from "../services/chatApi";
import { getChatById } from "../services/historyApi";

function Chat() {
  const { id } = useParams();

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [conversationId, setConversationId] =
    useState(null);

  const [isLoading, setIsLoading] =
    useState(false);

  useEffect(() => {
    const loadHistoryChat = async () => {
      if (!id) return;

      try {
        const chat = await getChatById(id);

        setConversationId(chat._id);

        const formattedMessages =
          chat.messages.map((msg) => ({
            type:
              msg.role === "assistant"
                ? "ai"
                : "user",

            content: msg.content,

            timestamp: msg.timestamp,
          }));

        setMessages(formattedMessages);
      } catch (error) {
        console.error(error);
      }
    };

    loadHistoryChat();
  }, [id]);

  const sendMessage = async () => {
    if (!question.trim() || isLoading)
      return;

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
      const response = await streamChat(
        userQuestion,

        conversationId,

        (data) => {
          setMessages((prev) => [
            ...prev,

            {
              type: "ai",

              content: data.answer,

              timestamp: new Date(),
            },
          ]);
        }
      );

      if (!conversationId) {
        setConversationId(
          response.conversation_id
        );
      }
    } catch (error) {
      console.error(error);

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
    <div
      className="
      flex
      flex-col

      h-[78vh]

      rounded-3xl

      bg-white

      dark:bg-slate-900

      border

      border-slate-200

      dark:border-slate-700

      shadow-lg

      overflow-hidden
    "
    >
      {/* Chat Area */}

      <div
        className="
        flex-1

        overflow-y-auto

        p-6

        space-y-5
      "
      >
        {messages.length === 0 && (
          <div
            className="
            text-center

            mt-24

            text-slate-500

            dark:text-slate-400
          "
          >
            Start a conversation with AI
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`
              p-4

              rounded-2xl

              max-w-[80%]

              shadow-sm

              ${
                message.type === "user"
                  ? `
                  ml-auto

                  bg-gradient-to-r

                  from-blue-600

                  to-blue-500

                  text-white
                `
                  : `
                  bg-slate-100

                  text-slate-800

                  dark:bg-slate-800

                  dark:text-white

                  border

                  border-slate-200

                  dark:border-slate-700
                `
              }
            `}
          >
            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>
          </div>
        ))}

        {isLoading && (
          <div
            className="
            p-4

            rounded-2xl

            max-w-[80%]

            bg-slate-100

            dark:bg-slate-800

            dark:text-white

            border

            border-slate-200

            dark:border-slate-700
          "
          >
            Thinking...
          </div>
        )}
      </div>

      {/* Input Area */}

      <div
        className="
        p-5

        border-t

        border-slate-200

        dark:border-slate-700

        flex

        gap-3
      "
      >
        <input
          type="text"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask anything..."

          className="
          flex-1

          px-5

          py-3

          rounded-2xl

          border

          border-slate-300

          bg-white

          text-slate-900

          outline-none

          focus:ring-2

          focus:ring-blue-500

          dark:bg-slate-950

          dark:text-white

          dark:border-slate-700

          transition-all
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
          px-6

          py-3

          rounded-2xl

          bg-blue-600

          hover:bg-blue-700

          text-white

          font-medium

          transition

          disabled:bg-slate-500
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