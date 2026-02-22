import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/loginPage";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;