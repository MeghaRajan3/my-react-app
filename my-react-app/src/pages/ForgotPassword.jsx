import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f8ff",
      }}
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Forgot Password
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Enter your email to reset your password
        </Typography>

        <TextField fullWidth label="Email" margin="normal" />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Send Reset Link
        </Button>

        <Typography mt={2} align="center">
          <RouterLink to="/signin">Back to Login</RouterLink>
        </Typography>
      </Paper>
    </Box>
  );
}
