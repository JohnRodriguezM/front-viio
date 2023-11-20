import { toast } from "sonner";
import { api } from "../../axios/axios";
import { createUser } from "./signUp.service";


jest.mock("../../axios/axios"); // Mock the API module
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("createUser", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mock implementations before each test
  });

  it("should create a user successfully", async () => {
    const bodyPost = { username: "testuser", password: "testpassword" };
    const handleLoadingLogin = jest.fn();

    const response = { status: 200, data: { message: "User created" } };
    (api.post as jest.Mock).mockResolvedValue(response);

    await createUser(bodyPost, handleLoadingLogin);

    expect(api.post).toHaveBeenCalledWith("/signup", bodyPost);
    expect(toast.success).toHaveBeenCalledWith(response.data.message);
    expect(handleLoadingLogin).toHaveBeenCalledTimes(2); // Called with true and false
  });

  it("should handle error response from the server", async () => {
    const bodyPost = { username: "testuser", password: "testpassword" };
    const handleLoadingLogin = jest.fn();

    const errorResponse = { status: 400, data: { message: "Invalid request" } };
    const error = { response: errorResponse };
    (api.post as jest.Mock).mockRejectedValue(error);

    await createUser(bodyPost, handleLoadingLogin);

    expect(api.post).toHaveBeenCalledWith("/signup", bodyPost);
    expect(toast.error).toHaveBeenCalledWith(errorResponse.data.message);
    expect(handleLoadingLogin).toHaveBeenCalledTimes(2); // Called with true and false
  });

  it("should handle generic error", async () => {
    const bodyPost = { username: "testuser", password: "testpassword" };
    const handleLoadingLogin = jest.fn();

    const error = new Error("Request failed");
    (api.post as jest.Mock).mockRejectedValue(error);

    await createUser(bodyPost, handleLoadingLogin);

    expect(api.post).toHaveBeenCalledWith("/signup", bodyPost);
    expect(handleLoadingLogin).toHaveBeenCalledTimes(2); // Called with true and false
  });
});