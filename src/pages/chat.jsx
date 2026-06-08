import { useState, useEffect, useRef } from "react";
import api from "../services/api";
import ChatBubble from "../components/ChatBubble";
import PDFViewer from "../components/PDFViewer";

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = {
      type: "user",
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);

      const response = await api.post("/chat", {
        question,
      });

      console.log("API Response:", response.data);

      const aiMessage = {
        type: "ai",
        content: response.data.answer,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      setSources(response.data.sources || []);
      setQuestion("");
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-5 h-[85vh]">
      {/* Chat Section */}
      <div className="flex-1 bg-white rounded-xl shadow flex flex-col">
        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Chat with your documents
          </h2>
        </div>

        <div className="flex justify-end p-3">
          <button
            onClick={() => {
              setMessages([]);
              setSources([]);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Clear Chat
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
            />
          ))}

          {loading && (
            <div className="bg-gray-100 p-4 rounded-xl w-fit">
              Generating response...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask anything..."
              className="flex-1 border rounded-xl px-4 py-3"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-8 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="w-80 flex flex-col gap-4">
        {/* PDF Preview */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold mb-4">
            Document Preview
          </h2>

          <PDFViewer
            pdfUrl={selectedPdf}
            pageNumber={selectedPage}
          />
        </div>

        {/* Sources */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-bold text-lg mb-5">
            Sources Used
          </h3>

          {sources.length === 0 ? (
            <p>No sources yet</p>
          ) : (
            sources.map((source, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedPdf(source.pdf_url);
                  setSelectedPage(source.page);
                }}
                className="bg-slate-50 border rounded-xl p-4 mb-3 cursor-pointer hover:bg-slate-100"
              >
                <p className="font-semibold">
                  {source.document}
                </p>

                <p>Page {source.page}</p>

                <p>Score: {source.score}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;