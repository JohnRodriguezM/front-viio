import { SearchResults } from "./components/pruebas/SearchResults";
import { Component1 } from "./components/pruebas/Component1";
import { SignIn } from "./components/signIn/Login";
import { ProductDetail } from "./components/pruebas/ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUp } from "./components/signUp/SignUp";

const ProtectedComponent = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  const token = localStorage.getItem("token");
  return token ? <Component /> : <Navigate to="/" />;
};

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/home"
        element={<ProtectedComponent component={Component1} />}
      />
      <Route
        path="/searchresults"
        element={<ProtectedComponent component={SearchResults} />}
      />
      <Route
        path="/productdetail"
        element={<ProtectedComponent component={ProductDetail} />}
      />
    </Routes>
  );
};
