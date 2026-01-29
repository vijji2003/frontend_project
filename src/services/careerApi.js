import { apiRequest } from "./api";

export const createApplication = (formData) => {
  return apiRequest("/apply/", {
    method: "POST",
    body: formData,
  });
};
