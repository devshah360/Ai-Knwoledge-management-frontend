import api from "./api";

export const getDashboardData = async () => {
        const response = await api.get("/dashboard/stats");
        return response.data;
};

export const getSearchAnalytics = async () => {
        const response = await api.get("/dashboard/search-trend");
        return response.data;
};

export const getUploadAnalytics = async () => {
        const response = await api.get("/dashboard/upload-trend");
        return response.data;
};