// src/pages/Transactions.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";

// Dummy transaction data
const dummyTransactions = [
  {
    id: "TXN001",
    date: "2025-11-15",
    type: "Salary",
    amount: 50000,
    category: "Credit",
    description: "Monthly salary credited",
  },
  {
    id: "TXN002",
    date: "2025-11-16",
    type: "Grocery",
    amount: 2000,
    category: "Debit",
    description: "Grocery shopping at local store",
  },
  {
    id: "TXN003",
    date: "2025-11-17",
    type: "Transfer to User2",
    amount: 1500,
    category: "Debit",
    description: "Transferred money to User2",
  },
  {
    id: "TXN004",
    date: "2025-11-17",
    type: "Deposit",
    amount: 10000,
    category: "Credit",
    description: "Cash deposit",
  },
];

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTxn, setSelectedTxn] = useState(null);

  useEffect(() => {
    // Fetch user transactions from API or use dummy data
    setTransactions(dummyTransactions);
  }, []);

  const handleView = (txn) => {
    setSelectedTxn(txn);
  };

  const handleClose = () => {
    setSelectedTxn(null);
  };

  const handleDelete = (txnId) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      setTransactions(transactions.filter((txn) => txn.id !== txnId));
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Transaction History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Type / Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.type}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleView(txn)}
                    sx={{ mr: 1 }}
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(txn.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {transactions.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No transactions available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal Dialog for viewing transaction details */}
      <Dialog open={!!selectedTxn} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Transaction Details</DialogTitle>
        <DialogContent dividers>
          {selectedTxn && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2">Transaction ID:</Typography>
                <Typography>{selectedTxn.id}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2">Date:</Typography>
                <Typography>{selectedTxn.date}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2">Type / Category:</Typography>
                <Typography>{selectedTxn.type}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2">Amount:</Typography>
                <Typography>{selectedTxn.amount}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Description:</Typography>
                <Typography>{selectedTxn.description}</Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Transactions;
