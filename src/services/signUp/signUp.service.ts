import { AxiosError } from "axios";
import { toast } from "sonner";
import { api } from "../../axios/axios";

export const createUser = async (bodyPost: unknown) => {
  try {
    const response = await api.post("/signup", bodyPost);

    if (response.status === 200) toast.success(response?.data?.message);
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const data = axiosError.response.data as { message: string };
      toast.error(data.message);
    }
  }
};
