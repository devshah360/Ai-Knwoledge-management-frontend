
import api from "./api";

export const getSystemHealth = async () => {
  const response = await api.get("/monitoring/health");
  return response.data;
};

export const getMetrics = async () => {
  const response = await api.get("/monitoring/metrics");

  return {
    ...response.data,
    conversations: response.data.chats ?? 0,
    queue_size: response.data.queue_size ?? 0,
  };
};

export const getResources = async () => {
  const response = await api.get("/monitoring/resources");

  return {
    ...response.data,
    cpu: response.data.cpu_percent ?? 0,
    memory: response.data.memory_percent ?? 0,
  };
};
