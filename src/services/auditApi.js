import api from "./api";

export const getAuditLogs = async () => {
  const response = await api.get(
    "/activity/"
  );

  return response.data;
};