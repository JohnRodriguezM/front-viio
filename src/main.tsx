import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </StrictMode>
);
