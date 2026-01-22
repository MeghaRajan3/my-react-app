import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden", // 🔥 parent never scrolls
      }}
    >
      {/* STATIC SIDEBAR */}
      <Navigation />

      {/* PAGE CONTENT – ONLY SCROLL HERE */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto", // ✅ SINGLE SCROLL
          p: 3,
          bgcolor: "#f5f6f8",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
