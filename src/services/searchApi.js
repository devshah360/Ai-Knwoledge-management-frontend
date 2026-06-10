import api from "./api";

export const searchDocuments = async (query , page = 1) => {
        const response = await api.get(`/seach?q=${query}&pages=${page}`);
        return response.data
};
export const getSuggestion = async (query) => {
        const response = await api.get(`/seach/suggestions?q=${query}`);
        return response.data
};      
