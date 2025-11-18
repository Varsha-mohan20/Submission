import React, { useState } from "react";
import {
  Container,
  Paper,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// Dummy DB
let usersDB = [
  { email: "admin@gmail.com", userName: "Admin", roleId: 4, password: "Admin@123" },
  { email: "bankuser@gmail.com", userName: "BankUser", roleId: 5, password: "Bank@123", accounts: [] },
  { email: "normaluser@gmail.com", userName: "NormalUser", roleId: 6, password: "Normal@123", accounts: [] }
];

export default function Login() {
  const { setCurrentUser } = useUser();
  const navigate = useNavigate();

  const [tab, setTab] = useState(0); // 0 = existing, 1 = new
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatedUser, setValidatedUser] = useState(null);
  const [formData, setFormData] = useState({});

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
    setEmail("");
    setPassword("");
    setValidatedUser(null);
    setFormData({});
  };

  // Existing user login
  const handleLogin = () => {
    const user = usersDB.find((u) => u.email === email && u.password === password);
    if (!user) return alert("Invalid credentials");

    setCurrentUser(user);

    // Role-based navigation
    if (user.roleId === 4) navigate("/manage-users");
    else navigate("/accounts");
  };

  // New user email validation
  const handleEmailValidation = () => {
    const user = usersDB.find((u) => u.email === email);
    if (!user) return alert("User not registered. Contact admin.");

    setValidatedUser(user);
    setFormData({ ...user });
  };

  // Submit updated user info
  const handleCreateUserSubmit = () => {
    alert(`User ${formData.userName} validated and account ready`);
    setCurrentUser(validatedUser);

    if (validatedUser.roleId === 4) navigate("/manage-users");
    else navigate("/accounts");
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundImage: "url('/bank-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.95)" }}>
          <Tabs value={tab} onChange={handleTabChange} centered>
            <Tab label="Existing User" />
            <Tab label="New User" />
          </Tabs>

          {/* Existing */}
          {tab === 0 && (
            <Box sx={{ mt: 3 }}>
              <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
            </Box>
          )}

          {/* New User */}
          {tab === 1 && (
            <Box sx={{ mt: 3 }}>
              {!validatedUser ? (
                <>
                  <TextField fullWidth label="Enter Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleEmailValidation}>Validate Email</Button>
                </>
              ) : (
                  <> <Typography variant="h6" mb={2}> Welcome {validatedUser.userName}! Update your account details below. </Typography> 
                  <TextField fullWidth label="Full Name" margin="normal" value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} /> 
                  <TextField fullWidth label="Email" margin="normal" value={formData.email} disabled /> 
                  <TextField fullWidth label="Password" type="password" margin="normal" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} /> 
                  <TextField fullWidth label="Date of Birth" type="date" margin="normal" InputLabelProps={{ shrink: true }} value={formData.dateOfBirth} onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })} /> 
                  <TextField fullWidth label="Address" margin="normal" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} /> 
                  <TextField fullWidth label="PAN" margin="normal" value={formData.pan} onChange={(e) => setFormData({ ...formData, pan: e.target.value })} /> 
                  <TextField fullWidth label="Aadhar" margin="normal" value={formData.aadhar} onChange={(e) => setFormData({ ...formData, aadhar: e.target.value })} /> 
                  <FormControlLabel control={ <Checkbox checked={formData.isMinor} onChange={(e) => setFormData({ ...formData, isMinor: e.target.checked })} /> } label="Is Minor" /> 
                  <FormControlLabel control={ <Checkbox checked={formData.isNRI} onChange={(e) => setFormData({ ...formData, isNRI: e.target.checked })} /> } label="Is NRI" /> 
                  <FormControlLabel control={ <Checkbox checked={formData.poA_Exists} onChange={(e) => setFormData({ ...formData, poA_Exists: e.target.checked })} /> } label="POA Exists" /> 
                  <TextField fullWidth label="POA Details" margin="normal" value={formData.poA_Details} onChange={(e) => setFormData({ ...formData, poA_Details: e.target.value })} /> 
                  <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleCreateUserSubmit} > Submit </Button> </>
              )}
            </Box>
          )}
        </Paper>
      </Container>
    </Grid>
  );
}
