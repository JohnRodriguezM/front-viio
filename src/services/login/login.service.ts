import { toast } from "sonner";
import { api } from "../../axios/axios";
import { AxiosError } from "axios";

/**
 * Performs a login request to the server.
 *
 * @param bodyPost - The request body containing the login credentials.
 * @param handleLoading - A function to handle the loading state during the login process.
 * @returns A Promise that resolves to the response data if the login is successful.
 */
export const login = async (
  bodyPost: unknown,
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    handleLoading(true);
    const response = await api.post("/login", bodyPost);

    if (response.status === 200) {
      toast.success(response?.data?.message);

      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.message === "Network Error") {
      toast.error("Error al conectarse con el servidor");
    }
  } finally {
    handleLoading(false);
  }
};
