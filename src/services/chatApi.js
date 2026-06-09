//import api from "./api";

export const streamChat = async (
  question,
  onChunk
) => {
  const response = await fetch(
    "http://localhost:8000/chat/stream",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${
          localStorage.getItem("token")
        }`
      },
      body: JSON.stringify({
        question
      })
    }
  );

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } =
      await reader.read();

    if (done) break;

    const chunk =
      decoder.decode(value);

    onChunk(chunk);
  }
};