import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import EventIcon from "@mui/icons-material/Event";
import BarChartIcon from "@mui/icons-material/BarChart";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "Projects", path: "/projects", icon: <FolderIcon /> },
  { label: "Activities", path: "/activities", icon: <EventIcon /> },
  { label: "Analysis", path: "/analysis", icon: <BarChartIcon /> },
];

export default function Navigation() {
  return (
    <Box
      sx={{
        width: 220,
        bgcolor: "#fff",
        borderRight: "1px solid #e5e7eb",
        p: 2,
        flexShrink: 0,
      }}
    >
      <Typography fontWeight={600} mb={3}>
        Dashboard
      </Typography>

      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 8,
            textDecoration: "none",
            color: isActive ? "#2563eb" : "#111",
            background: isActive ? "#eff6ff" : "transparent",
            marginBottom: 6,
          })}
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </Box>
  );
}
