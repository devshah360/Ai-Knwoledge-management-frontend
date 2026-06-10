import api from "./api";

export const generateWorkflowGraph = async () => {
  const response = await api.get("/graph/graph");
  return response.data;
};

export const getWorkflowGraphUrl = () => {
  return `${api.defaults.baseURL}/graph/graph-view`;
};