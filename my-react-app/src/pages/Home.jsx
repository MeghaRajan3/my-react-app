import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f8ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Welcome to My App
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        This is a simple React application created as a college project.
      </Typography>

      <Box>
        <Button
          variant="contained"
          sx={{ textTransform: "none", mr: 2 }}
          onClick={() => navigate("/signup")}
        >
          Sign up
        </Button>

        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          onClick={() => navigate("/signin")}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
