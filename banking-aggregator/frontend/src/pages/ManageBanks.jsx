// src/pages/ManageBanks.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

// Dummy database
const initialBanks = [
  {
    id: 1,
    name: "Bank of India",
    branches: ["Mumbai Branch", "Delhi Branch"],
  },
  {
    id: 2,
    name: "State Bank",
    branches: ["Chennai Branch", "Bangalore Branch"],
  },
];

const ManageBanks = () => {
  const [banks, setBanks] = useState(initialBanks);
  const [selectedBank, setSelectedBank] = useState(null);
  const [newBankName, setNewBankName] = useState("");
  const [newBranchName, setNewBranchName] = useState("");
  const [openBranches, setOpenBranches] = useState({});

  // Add a new bank
  const handleAddBank = () => {
    if (!newBankName) return;
    const newBank = { id: Date.now(), name: newBankName, branches: [] };
    setBanks([...banks, newBank]);
    setNewBankName("");
  };

  // Add a new branch to a bank
  const handleAddBranch = () => {
    if (!newBranchName || !selectedBank) return;
    const updatedBanks = banks.map((b) =>
      b.id === selectedBank.id
        ? { ...b, branches: [...b.branches, newBranchName] }
        : b
    );
    setBanks(updatedBanks);
    setNewBranchName("");
  };

  const toggleBranches = (bankId) => {
    setOpenBranches((prev) => ({ ...prev, [bankId]: !prev[bankId] }));
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Manage Banks
      </Typography>

      {/* Add New Bank */}
      <Card sx={{ mb: 3, p: 2 }}>
        <Typography variant="h6">Add New Bank</Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
          <Grid item xs={8} sm={10}>
            <TextField
              fullWidth
              label="Bank Name"
              value={newBankName}
              onChange={(e) => setNewBankName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button variant="contained" onClick={handleAddBank}>
              Add Bank
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* List of Banks */}
      <Grid container spacing={3}>
        {banks.map((bank) => (
          <Grid item xs={12} sm={6} md={4} key={bank.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{bank.name}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    setSelectedBank(bank);
                  }}
                >
                  Add Branch
                </Button>
                <IconButton onClick={() => toggleBranches(bank.id)}>
                  {openBranches[bank.id] ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </CardActions>
              <Collapse in={openBranches[bank.id]} timeout="auto" unmountOnExit>
                <List>
                  {bank.branches.length > 0 ? (
                    bank.branches.map((branch, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={branch} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText primary="No branches added yet." />
                    </ListItem>
                  )}
                </List>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Branch Dialog */}
      <Dialog open={!!selectedBank} onClose={() => setSelectedBank(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Branch for {selectedBank?.name}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Branch Name"
            margin="normal"
            value={newBranchName}
            onChange={(e) => setNewBranchName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddBranch} variant="contained">
            Add Branch
          </Button>
          <Button onClick={() => setSelectedBank(null)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ManageBanks;
