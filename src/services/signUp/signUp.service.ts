import { AxiosError } from "axios";
import { toast } from "sonner";
import { api } from "../../axios/axios";

/**
 * Creates a new user.
 * @param bodyPost - The request body containing user information.
 * @param handleLoadingLogin - The function to handle the loading state of the login process.
 * @returns A Promise that resolves to the response from the server.
 */
export const createUser = async (
  bodyPost: unknown,
  handleLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    handleLoadingLogin(true);
    const response = await api.post("/signup", bodyPost);

    if (response.status === 200) toast.success(response?.data?.message);
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const data = axiosError.response.data as { message: string };
      toast.error(data.message);
    }
  } finally {
    handleLoadingLogin(false);
  }
};
