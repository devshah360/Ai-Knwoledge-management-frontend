import ReactMarkdown from "react-markdown";

function ChatBubble({ message }) {
  const isUser = message.type === "user";

  return (
    <div
      className={`flex gap-3 mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          AI
        </div>
      )}

      <div>
        <div
          className={`max-w-xl p-4 rounded-xl shadow ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          <ReactMarkdown>
            {message.content}
          </ReactMarkdown>
        </div>

        <p className="text-xs text-gray-500 mt-1">
          {new Date(
            message.timestamp
          ).toLocaleTimeString()}
        </p>
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
          U
        </div>
      )}
    </div>
  );
}

export default ChatBubble;