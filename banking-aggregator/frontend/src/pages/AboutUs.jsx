// src/pages/AboutUs.jsx
import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const teamMembers = [
  {
    name: "Varsha",
    role: "Frontend Developer",
    image: "/team1.jpg",
  },
  {
    name: "Ravi",
    role: "Backend Developer",
    image: "/team2.jpg",
  },
  {
    name: "Sneha",
    role: "UI/UX Designer",
    image: "/team3.jpg",
  },
];

const AboutUs = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        About Our Bank
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Our banking aggregator app brings all your accounts into one place. We prioritize security,
        usability, and convenience for all our users.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography>{member.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
