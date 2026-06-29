import api from "./api";

export const getAuditLogs = async () => {
  const response = await api.get("/activity/");
  return response.data;
};

export const deleteAuditLog = async (id) => {
  const response = await api.delete(`/activity/${id}`);
  return response.data;
};

export const deleteAllAuditLogs = async () => {
  const response = await api.delete("/activity/");
  return response.data;
};