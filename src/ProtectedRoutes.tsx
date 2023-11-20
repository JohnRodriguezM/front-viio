import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

/**
 * Renders a protected component based on the presence of a token in the local storage.
 * If a token is present, it renders the provided component along with a navigation bar.
 * If a token is not present, it navigates to the home page.
 *
 * @param {Object} props - The component props.
 * @param {React.ElementType} props.component - The component to be rendered if a token is present.
 * @returns {JSX.Element} - The rendered component or a navigation to the home page.
 */
export const ProtectedComponent = ({
  component: Component,
}: {
  component: React.ElementType;
}): JSX.Element => {
  const token: string | null = localStorage.getItem("token");
  return token ? (
    <>
      <NavBar />
      <Component />
    </>
  ) : (
    <Navigate to="/" />
  );
};
