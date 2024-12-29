import { Route, Routes, useLocation } from "react-router";
import { Home } from "@/pages/home/Home";
import { Resume } from "@/pages/resume/Resume";
import { AnimatePresence } from "framer-motion";

export const PageRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};
