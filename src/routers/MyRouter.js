import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import SingUp from "../pages/SignUp";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
