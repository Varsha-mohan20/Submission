import React, { useState } from "react";
import { Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from "@mui/material";
import FeatureCard from "../components/Card";

// Feature definitions
const features = [
  { title: "Savings Account", description: "Open and manage your savings account.", type: "account", minBalance: 1000 },
  { title: "Current Account", description: "Business-friendly current account.", type: "account", minBalance: 5000 },
  { title: "Loans", description: "Personal and home loans.", type: "loan" },
  { title: "Investments", description: "Mutual funds and fixed deposits.", type: "investment" },
];

const LandingPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [formData, setFormData] = useState({ accountName: "", initialDeposit: "" });

  const handleOpen = (feature) => {
    setSelectedFeature(feature);
    if (feature.type === "account") {
      setFormData({ accountName: feature.title, initialDeposit: feature.minBalance || 0 });
    } else {
      setFormData({});
    }
  };

  const handleClose = () => {
    setSelectedFeature(null);
    setFormData({ accountName: "", initialDeposit: "" });
  };

  const handleSubmit = () => {
    alert(`Submitted for ${selectedFeature.title} with data: ${JSON.stringify(formData)}`);
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              onClick={() => handleOpen(feature)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal for feature actions */}
      <Dialog open={!!selectedFeature} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedFeature?.title}</DialogTitle>
        <DialogContent dividers>
          {selectedFeature?.type === "account" && (
            <>
              <TextField
                fullWidth
                label="Account Name"
                margin="normal"
                value={formData.accountName}
                onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
              />
              <TextField
                fullWidth
                label="Initial Deposit"
                type="number"
                margin="normal"
                value={formData.initialDeposit}
                onChange={(e) => setFormData({ ...formData, initialDeposit: e.target.value })}
              />
            </>
          )}
          {selectedFeature?.type === "loan" && (
            <Typography>Loan application form will appear here.</Typography>
          )}
          {selectedFeature?.type === "investment" && (
            <Typography>Investment options and forms will appear here.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LandingPage;
