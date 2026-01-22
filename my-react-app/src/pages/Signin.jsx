import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import signinImg from "../assets/images/signin.png";
import GoogleLogo from "../assets/images/google.png";
import AppleLogo from "../assets/images/apple.png";
import { Link } from "@mui/material";

export default function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fakeEmail = "testuser@gmail.com";
  const fakePassword = "Test@1234";

  const handleSignin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (email === fakeEmail && password === fakePassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          width: "85%",
          height: "85%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            bgcolor: "#dbeafe",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={signinImg} style={{ width: "70%" }} />
        </Box>

        {/* RIGHT FORM */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 380,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              Sign in
            </Typography>

            <TextField
              fullWidth
              variant="standard"
              label="Enter your email address"
              sx={{ mb: 3 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              variant="standard"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Typography
              sx={{
                textAlign: "right",
                mt: 1,
                fontSize: 14,
              }}
            >
              <Link
                component={RouterLink}
                to="/forgot-password"
                underline="hover"
                sx={{ color: "primary.main" }}
              >
                Forgot password?
              </Link>
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, textTransform: "none" }}
              onClick={handleSignin}
            >
              Sign in
            </Button>

            <Divider sx={{ my: 3 }}>or login with</Divider>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img
                    src={GoogleLogo}
                    alt="Google"
                    style={{
                      width: 18,
                      height: 18,
                    }}
                  />
                }
                sx={{ mt: 2, textTransform: "none" }}
              >
                Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img
                    src={AppleLogo}
                    alt="Apple"
                    style={{ width: 18, height: 18 }}
                  />
                }
                sx={{ mt: 2, textTransform: "none" }}
              >
                Apple
              </Button>
            </Box>

            <Typography sx={{ mt: 3, fontSize: 14 }}>
              Don’t have an account?{" "}
              <RouterLink to="/signup" style={{ color: "#2563eb" }}>
                Sign up
              </RouterLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
