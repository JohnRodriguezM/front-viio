import { toast } from "sonner";
import { api } from "../../axios/axios";
import { AxiosError } from "axios";

export const login = async (bodyPost: unknown) => {
  try {
    const response = await api.post("/login", bodyPost);

    if (response.status === 200) {
      toast.success(response?.data?.message);

      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const data = axiosError.response.data as { message: string };
      toast.error(data.message);
    }
  }
};
