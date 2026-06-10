// src/utils/errorHandler.js

export const handleError = (error) => {
  console.error("API Error:", error);

  const detail = error?.response?.data?.detail;

  // FastAPI validation errors
  if (Array.isArray(detail)) {
    return detail
      .map((err) => err.msg)
      .join(", ");
  }

  // FastAPI custom error
  if (typeof detail === "string") {
    return detail;
  }

  // Generic JS/Axios error
  if (error?.message) {
    return error.message;
  }

  return "Something went wrong";
};