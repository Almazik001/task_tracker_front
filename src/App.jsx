import "./App.css";
import TaskPage from "./components/task/TaskPage";
import { AuthProvider } from "./components/context/AuthContext";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/loginPage";
import ProtectedRoute from "./components/routers/ProtectedRoute";

function App() {
  console.log(import.meta.env.VITE_SUPABASE_URL);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TaskPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;