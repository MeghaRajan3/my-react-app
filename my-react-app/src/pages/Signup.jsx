import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import GirlImg from "../assets/images/woman.png";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Email validation
  const validateEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(value)) {
      setEmailError("Enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  // ✅ Password validation
  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
      setPasswordError("Password must contain letters and numbers");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) return;

    setLoading(true);

    console.log({ name, email, password });

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setName("");
      setEmail("");
      setPassword("");
    }, 1500);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", bgcolor: "#f5f8ff" }}>
      {/* LEFT SECTION */}
      <Box
        sx={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "80%",
            bgcolor: "#d9eaff",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={GirlImg}
            alt="Illustration"
            sx={{ width: "75%", height: "auto" }}
          />
        </Box>
      </Box>

      {/* RIGHT SECTION */}
      <Box
        sx={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 10,
        }}
      >
        {!success ? (
          <>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={4}
              textAlign="center"
            >
              Sign up
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Enter your name"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <TextField
                label="Enter your email address"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                error={!!emailError}
                helperText={emailError}
                required
              />

              <TextField
                label="Password"
                type="password"
                variant="standard"
                fullWidth
                sx={{ mb: 4 }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                error={!!passwordError}
                helperText={passwordError}
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ textTransform: "none", py: 1.2, mb: 2 }}
              >
                {loading ? "Creating account..." : "Sign up"}
              </Button>
            </form>

            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Link component={RouterLink} to="/signin" underline="none">
                Sign in
              </Link>
            </Typography>
          </>
        ) : (
          // ✅ SUCCESS UI
          <Box textAlign="center">
            <Typography variant="h4" fontWeight="bold" mb={2}>
              🎉 Account Created Successfully!
            </Typography>

            <Typography color="text.secondary" mb={4}>
              Please check your email to verify your account.
            </Typography>

            <Button
              variant="contained"
              sx={{ textTransform: "none", px: 4 }}
              onClick={() => navigate("/signin")}
            >
              Go to Sign In
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Signup;
