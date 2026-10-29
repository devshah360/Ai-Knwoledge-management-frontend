
import api from "./api";

export const searchDocuments = async (query) => {
  const response = await api.get("/search/", {
    params: { query },
  });

  return response.data;
};

export const getSuggestion = async (query) => {
  const response = await api.get("/search/suggestions", {
    params: { query },
  });

  return response.data;
};
