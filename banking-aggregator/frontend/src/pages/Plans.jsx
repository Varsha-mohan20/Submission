// src/pages/Plans.jsx
import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const plansData = [
  {
    name: "Basic Savings",
    interestRate: "3.5%",
    minBalance: "₹1000",
    features: ["No monthly fees", "Online banking access"],
  },
  {
    name: "Premium Savings",
    interestRate: "4.5%",
    minBalance: "₹10000",
    features: ["Higher interest rate", "Free debit card", "Priority support"],
  },
  {
    name: "Salary Account",
    interestRate: "3.0%",
    minBalance: "₹0",
    features: ["Direct salary credit", "No minimum balance", "ATM access"],
  },
];

const Plans = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Banking Plans
      </Typography>
      <Grid container spacing={3}>
        {plansData.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h6">{plan.name}</Typography>
                <Typography>Interest Rate: {plan.interestRate}</Typography>
                <Typography>Minimum Balance: {plan.minBalance}</Typography>
                <Typography variant="subtitle2" mt={1}>
                  Features:
                </Typography>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Plans;
