import { SearchResults } from "./components/searchResults/SearchResults";
import { SignIn } from "./components/signIn/Login";
import { ProductDetail } from "./components/productDetails/ProductDetail";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/signUp/SignUp";
import { Home } from "./components/home/Home";
import { LoadingProvider } from "./context/LoadingContext";
import { ProtectedComponent } from "./ProtectedRoutes";

/**
 * The main component of the application.
 * Renders the routes and provides loading state management.
 *
 * @returns The JSX element representing the App component.
 */
export const App = (): JSX.Element => {
  return (
    <>
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/home"
            element={<ProtectedComponent component={Home} />}
          />
          <Route
            path="/search"
            element={<ProtectedComponent component={SearchResults} />}
          />
          <Route
            path="/product/:id"
            element={<ProtectedComponent component={ProductDetail} />}
          />
        </Routes>
      </LoadingProvider>
    </>
  );
};
