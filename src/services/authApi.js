import api from "./api";

export const loginUser = async (username, password) => {
  const formData = new URLSearchParams();

  formData.append("username", username);
  formData.append("password", password);

  const response = await api.post(
    "/api/v1/auth/login",
    formData,
    {
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/me");

  return response.data;
};