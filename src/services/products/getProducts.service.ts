import { AxiosError } from "axios";
import { api } from "../../axios/axios";

/**
 * Retrieves all products from the server.
 *
 * @param handleLoading - A function to handle the loading state.
 * @returns A promise that resolves to an array of products.
 * @throws An error if the response structure is unexpected or if there is an error with the request.
 */
export const getAllProducts = async (
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  handleLoading(true);
  try {
    const response = await api.get("/products");
    if (response.status === 200 && response.data) {
      return response.data.data;
    } else {
      throw new Error("Unexpected response structure");
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new Error(String(axiosError.response.data));
    } else {
      throw axiosError;
    }
  } finally {
    handleLoading(false);
  }
};

/**
 * Retrieves searched products based on the provided title.
 * @param title - The title to search for.
 * @param handleLoading - A function to handle loading state.
 * @returns A Promise that resolves to the searched products.
 * @throws An error if the response structure is unexpected or if there is an error during the API request.
 */
export const getSearchedProducts = async (
  title: string,
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  handleLoading(true);
  try {
    const response = await api.get(`/products/search?title=${title}`);
    if (response.status === 200 && response.data) {
      return response.data.data;
    } else {
      throw new Error("Unexpected response structure");
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new Error(String(axiosError.response.data));
    } else {
      throw axiosError;
    }
  } finally {
    handleLoading(false);
  }
};
