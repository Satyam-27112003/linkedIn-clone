
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join_now from "./pages/Join_now.jsx";
import "./index.css";

import Home from "./pages/App.jsx";
import Signin from "./pages/signin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/join_now" element={<Join_now/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
