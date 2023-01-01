import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Detail from "../pages/Detail";
const Main = lazy(() => import("../pages/Main"));

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
