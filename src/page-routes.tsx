import { Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
