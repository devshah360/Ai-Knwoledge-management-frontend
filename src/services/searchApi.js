import api from "./api";

export const searchDocuments = async (query , page = 1) => {
        const response = await api.get(`/search/?query=${query}`);
        return response.data
};
export const getSuggestion = async (query) => {
        const response = await api.get(`/search/suggestions?q=${query}`);
        return response.data
};      
