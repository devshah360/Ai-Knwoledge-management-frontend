import api from "./api";

export const getSystemHealth = async () => {
  const response = await api.get(
    "/monitoring/health"
  );

  return response.data;
};

export const getMetrics = async () => {
  const response = await api.get(
    "/monitoring/metrics"
  );

  return response.data;
};

export const getResources = async () => {
  const response = await api.get(
    "/monitoring/resources"
  );

  return response.data;
};