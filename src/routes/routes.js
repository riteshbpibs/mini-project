import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import { SignInPageRoute, SignUpPageRoute } from ".";
import { useAuthContext } from "context/AuthContext";

const RoutesComponent = () => {
  const { login } = useAuthContext();

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* ...........Common Routes........... */}
      {!login && <Route path="/login" element={<SignInPageRoute />} />}

      {!login && <Route path="/signup" element={<SignUpPageRoute />} />}

      {/* ............Error Route.................. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesComponent;
