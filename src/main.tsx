import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.scss";
import { BrowserRouter } from "react-router";
import { PageRoutes } from "@/page-routes.tsx";
import { CursorTrail } from "@/components/ui/cursor-trail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
    <CursorTrail />
  </StrictMode>
);
