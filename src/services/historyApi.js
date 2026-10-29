import api from "./api";

export const getHistory = async (
  page = 1
) => {

  const response =
    await api.get(
      `/chat/history?page=${page}`
    );

  return response.data;
};

export const deleteChat = async (
  chatId
) => {

  const response =
    await api.delete(
      `/chat/history/${chatId}`
    );

  return response.data;
};

export const getChatById = async (
  chatId
) => {

  const response =
    await api.get(
      `/chat/history/${chatId}`
    );

  return response.data;
};