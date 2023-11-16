import { SearchResults } from "./components/pruebas/SearchResults";
import { Component1 } from "./components/pruebas/Component1";
import { SignIn } from "./components/signIn/Login";
import { ProductDetail } from "./components/pruebas/ProductDetail";
import {Routes, Route} from 'react-router-dom';

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/component1" element={<Component1 />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
  );
};