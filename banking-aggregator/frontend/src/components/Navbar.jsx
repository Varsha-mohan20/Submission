import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Banking Aggregator
        </Typography>

        {currentUser && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/landing">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/plans">Plans</Button>

            {(currentUser.roleId === 5 || currentUser.roleId === 6) && (
              <>
                <Button color="inherit" component={Link} to="/accounts">Accounts</Button>
                <Button color="inherit" component={Link} to="/transactions">Transactions</Button>
              </>
            )}

            {currentUser.roleId === 4 && (
              <>
                <Button color="inherit" component={Link} to="/manage-users">Manage Users</Button>
                <Button color="inherit" component={Link} to="/manage-banks">Manage Banks</Button>
              </>
            )}

            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
