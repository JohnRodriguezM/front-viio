import { api } from "../../axios/axios";
import { getSearchedProducts } from "./getProducts.service";

jest.mock("../../axios/axios"); // Mock the API module

describe("getSearchedProducts", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mock implementations before each test
  });

  it("should fetch searched products successfully", async () => {
    const title = "example";
    const handleLoading = jest.fn();

    const responseData = { data: ["product1", "product2"] };
    const response = { status: 200, data: responseData };
    (api.get as jest.Mock).mockResolvedValue(response);

    const result = await getSearchedProducts(title, handleLoading);

    expect(api.get).toHaveBeenCalledWith(`/products/search?title=${title}`);
    expect(handleLoading).toHaveBeenCalledTimes(2); // Called with true and false
    expect(result).toEqual(responseData.data);
  });

  it("should throw an error if the response structure is unexpected", async () => {
    const title = "example";
    const handleLoading = jest.fn();

    const response = { status: 200, data: null };
    (api.get as jest.Mock).mockResolvedValue(response);

    await expect(getSearchedProducts(title, handleLoading)).rejects.toThrow(
      "Unexpected response structure"
    );

    expect(api.get).toHaveBeenCalledWith(`/products/search?title=${title}`);
    expect(handleLoading).toHaveBeenCalledTimes(2); // Called with true and false
  });

  it("should throw an error if the request fails", async () => {
    const title = "example";
    const handleLoading = jest.fn();

    const error = new Error("Request failed");
    (api.get as jest.Mock).mockRejectedValue(error);

    await expect(getSearchedProducts(title, handleLoading)).rejects.toThrow(
      "Request failed"
    );

    expect(api.get).toHaveBeenCalledWith(`/products/search?title=${title}`);
    expect(handleLoading).toHaveBeenCalledTimes(2); // Called with true and false
  });
});
