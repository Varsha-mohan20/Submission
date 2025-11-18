// src/pages/ManageUsers.jsx
import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ManageUsers = () => {
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    roleId: 6, // default to NormalUser
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Replace alert with backend API call to create user
    alert(`User "${newUser.userName}" created successfully with role ${newUser.roleId}`);
    setNewUser({ userName: "", email: "", roleId: 6 });
    setShowForm(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Manage Users</Typography>
          <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancel" : "Register User"}
          </Button>
        </Grid>

        {showForm && (
          <Paper elevation={2} sx={{ p: 3, mt: 3, backgroundColor: "#f9f9f9" }}>
            <Typography variant="h6" gutterBottom>
              Register New User
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="userName"
                  fullWidth
                  value={newUser.userName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  value={newUser.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select name="roleId" value={newUser.roleId} onChange={handleChange} label="Role">
                    <MenuItem value={4}>Admin</MenuItem>
                    <MenuItem value={5}>BankUser</MenuItem>
                    <MenuItem value={6}>NormalUser</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};

export default ManageUsers;
