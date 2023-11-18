import { api } from "../../axios/axios";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    if (response.status === 200) {
      console.log(response.data);
      return response.data.data;
    }
  } catch (error) {
    const axiosError = error;
    if (axiosError.response) {
      const data = axiosError.response.data;
      return data;
    }
  }
};
