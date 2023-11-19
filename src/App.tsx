import { SearchResults } from "./components/searchResults/SearchResults";
// import { Component1 } from "./components/pruebas/Component1";
import { SignIn } from "./components/signIn/Login";
import { ProductDetail } from "./components/productDetails/ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUp } from "./components/signUp/SignUp";
import { Home } from "./components/home/Home";
import NavBar from "./components/NavBar/NavBar";

const ProtectedComponent = ({
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

export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<ProtectedComponent component={Home} />} />
        <Route
          path="/search"
          element={<ProtectedComponent component={SearchResults} />}
        />
        <Route
          path="/productdetail/:id"
          element={<ProtectedComponent component={ProductDetail} />}
        />
      </Routes>
    </>
  );
};
