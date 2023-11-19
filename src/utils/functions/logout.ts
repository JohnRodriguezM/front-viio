import { toast } from "sonner";

export const logoutDeleteToken = () => {
  localStorage.removeItem("token");
  toast.success("Logout!");
};
