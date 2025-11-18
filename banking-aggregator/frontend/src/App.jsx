import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import ManageUsers from "./pages/ManageUsers";
import ManageBanks from "./pages/ManageBanks";
import AboutUs from "./pages/AboutUs";
import Plans from "./pages/Plans";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plans" element={<Plans />} />

          {/* User pages */}
          <Route
            path="/accounts"
            element={
              <PrivateRoute roles={[5, 6]}>
                <Accounts />
              </PrivateRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <PrivateRoute roles={[5, 6]}>
                <Transactions />
              </PrivateRoute>
            }
          />

          {/* Admin pages */}
          <Route
            path="/manage-users"
            element={
              <PrivateRoute roles={[4]}>
                <ManageUsers />
              </PrivateRoute>
            }
          />
          <Route
            path="/manage-banks"
            element={
              <PrivateRoute roles={[4]}>
                <ManageBanks />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
