import { AxiosResponse } from "axios";
import { login } from "./login.service";
import { api } from "../../axios/axios";

// Mock the entire api module
jest.mock("../../axios/axios");

// In your test
it("should handle successful login", async () => {
  // Arrange
  const bodyPost = { username: "testuser", password: "testpassword" };
  const handleLoading = jest.fn();

  // Mock the api.post implementation
  (api.post as jest.MockedFunction<typeof api.post>).mockResolvedValueOnce({
    data: { message: "Login successful", token: "testtoken" },
  } as AxiosResponse);

  // Act
  await login(bodyPost, handleLoading);

  // Assert
  expect(handleLoading).toHaveBeenCalledTimes(2);
  expect(handleLoading).toHaveBeenCalledWith(true);
  expect(handleLoading).toHaveBeenCalledWith(false);
  expect(api.post).toHaveBeenCalledWith("/login", bodyPost);
});
