import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.scss";
import { BrowserRouter } from "react-router";
import { PageRoutes } from "@/page-routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </StrictMode>
);
