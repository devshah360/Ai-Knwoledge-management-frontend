// src/services/chatApi.js

export const streamChat = async (
  question,
  onResponse
) => {
  try {
    const response = await fetch(
      `http://localhost:8000/chat?question=${encodeURIComponent(question)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${
            localStorage.getItem("token")
          }`
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}`
      );
    }

    const data = await response.json();

    console.log(
      "Chat API Response:",
      data
    );

    onResponse(data.answer);

  } catch (error) {
    console.error(
      "Chat API Error:",
      error
    );

    onResponse(
      "Sorry, an error occurred while processing your request."
    );
  }
};