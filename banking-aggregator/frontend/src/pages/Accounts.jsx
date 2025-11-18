// src/pages/Accounts.jsx
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
  TextField,
  Grid,
} from "@mui/material";

// Dummy accounts data
const dummyAccounts = [
  {
    accountId: "ACC001",
    accountType: "Savings",
    balance: 50000,
    currency: "INR",
  },
  {
    accountId: "ACC002",
    accountType: "Checking",
    balance: 15000,
    currency: "INR",
  },
];

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Fetch accounts from API or use dummy data
    setAccounts(dummyAccounts);
  }, []);

  // Open deposit/withdraw/transfer modal
  const handleOpenAccount = (account) => {
    setSelectedAccount(account);
    setAmount("");
  };

  const handleClose = () => {
    setSelectedAccount(null);
  };

  const handleDeposit = () => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.accountId === selectedAccount.accountId
          ? { ...acc, balance: acc.balance + parseFloat(amount) }
          : acc
      )
    );
    alert(`Deposited ${amount} ${selectedAccount.currency} to ${selectedAccount.accountId}`);
    handleClose();
  };

  const handleWithdraw = () => {
    if (parseFloat(amount) > selectedAccount.balance) {
      alert("Insufficient balance");
      return;
    }
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.accountId === selectedAccount.accountId
          ? { ...acc, balance: acc.balance - parseFloat(amount) }
          : acc
      )
    );
    alert(`Withdrew ${amount} ${selectedAccount.currency} from ${selectedAccount.accountId}`);
    handleClose();
  };

  const handleCloseAccount = (accountId) => {
    if (window.confirm("Are you sure you want to close this account?")) {
      setAccounts(accounts.filter((acc) => acc.accountId !== accountId));
      alert(`Account ${accountId} closed successfully`);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Your Accounts
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account ID</TableCell>
              <TableCell>Account Type</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((acc) => (
              <TableRow key={acc.accountId}>
                <TableCell>{acc.accountId}</TableCell>
                <TableCell>{acc.accountType}</TableCell>
                <TableCell>{acc.balance}</TableCell>
                <TableCell>{acc.currency}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => handleOpenAccount(acc)}
                  >
                    Deposit / Withdraw
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleCloseAccount(acc.accountId)}
                  >
                    Close
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {accounts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No accounts available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Deposit / Withdraw Modal */}
      <Dialog open={!!selectedAccount} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedAccount?.accountId} - {selectedAccount?.accountType}</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Amount"
                type="number"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeposit} color="success">
            Deposit
          </Button>
          <Button onClick={handleWithdraw} color="warning">
            Withdraw
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Accounts;
