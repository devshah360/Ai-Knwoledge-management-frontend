import api from "./api";

export const getDocuments = async () => {
        const response = await api.get("/documents");
        return response.data;
};

export const deleteDocument = async (id) => {
        const response = await api.delete(`/documents/${id}`);
        return response.data;
};

export const renameDocument = async (id,filename) => {
        const response = await api.put(`/documents/${id}`,{filename});
        return response.data;
};

export const reindexDocument = async (id) => {
        const response = await api.post(`/documents/${id}/reindex`);
        return response.data;
};