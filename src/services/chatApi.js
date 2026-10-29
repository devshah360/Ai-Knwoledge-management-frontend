// src/services/chatApi.js
export const streamChat = async (

  question,

  conversationId,

  onResponse

) => {

  let url =

  `http://localhost:8000/chat?question=${encodeURIComponent(question)}`;

  if(conversationId){

      url +=

      `&conversation_id=${conversationId}`;

  }

  const response = await fetch(

      url,

      {

        method:"POST",

        headers:{

          "Content-Type":"application/json",

          "Authorization":

          `Bearer ${localStorage.getItem("token")}`

        }

      }

  );

  const data = await response.json();

  onResponse(data);

  return data;

};