import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

export const ProtectedComponent = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <NavBar />
      <Component />
    </>
  ) : (
    <Navigate to="/" />
  );
};
