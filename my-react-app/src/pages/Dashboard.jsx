import {
  Box,
  Typography,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

/* ================= DATA ================= */

const reminders = [
  { id: "1234566", name: "PSN College of Engineering and Technology", status: "Expires On", date: "27 Aug 2025" },
  { id: "1234379", name: "Government College of Engineering", status: "Expired", date: "25 May 2025" },
  { id: "1234630", name: "Francis Xavier Engineering College", status: "Expires On", date: "01 Oct 2025" },
  { id: "1234051", name: "Kamaraj Engineering College", status: "Expires On", date: "12 Jun 2025" },
  { id: "1234840", name: "Government College of Engineering", status: "Expires On", date: "03 Jan 2025" },
  { id: "1234284", name: "Francis Xavier Engineering College", status: "Expires On", date: "27 Sep 2025" },
  { id: "1234064", name: "Kamaraj Engineering College", status: "Expires On", date: "19 Mar 2025" },
  { id: "1234975", name: "PSN College of Engineering and Technology", status: "Expired", date: "30 Dec 2025" },
];

const chartData = [
  { year: "2021", value: 30 },
  { year: "2022", value: 32 },
  { year: "2023", value: 60 },
  { year: "2024", value: 48 },
  { year: "2025", value: 80 },
];

/* ================= COMPONENT ================= */

export default function Dashboard() {
  return (
   <Box
  sx={{
    minHeight: "100vh",
    bgcolor: "#f5f6f8",
    p: 3,
    display: "flex",
    flexDirection: "column",
  }}
>


      {/* ================= HEADER CARD ================= */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2,
          px: 3,
          py: 2,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <Typography fontWeight={600}>Dashboard</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          <Box sx={{ textAlign: "right" }}>
            <Typography fontSize={14} fontWeight={500}>
              Profile name
            </Typography>
            <Typography fontSize={12} color="text.secondary">
              arul@gmail.com
            </Typography>
          </Box>

          <Avatar sx={{ bgcolor: "#2563eb" }}>A</Avatar>
        </Box>
      </Box>

      {/* ================= STATS CARDS ================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
          mb: 3,
        }}
      >
        {[
          { v: 130, t: "Total", s: "On boarding colleges" },
          { v: 17, t: "Active", s: "MoUs" },
          { v: 15, t: "Completed", s: "MoUs" },
          { v: 9, t: "Dropped", s: "MoUs" },
        ].map((card, i) => (
          <Box
            key={i}
            sx={{
              bgcolor: "#fff",
              p: 2.5,
              borderRadius: 2,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              {card.v}
            </Typography>
            <Typography fontWeight={500}>{card.t}</Typography>
            <Typography variant="caption" color="text.secondary">
              {card.s}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ================= LOWER SECTION ================= */}
      <Box
        sx={{
         
          display: "grid",
          gridTemplateColumns: "2.2fr 1fr",
          gap: 2,
          
        }}
      >
        {/* ================= REMINDERS CARD ================= */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 2,
            p: 2.5,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <Typography fontWeight={600} mb={2}>
            Reminders
          </Typography>

          <Box sx={{  }}>
            {reminders.map((r, i) => (
              <Box
                key={i}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr 220px",
                  alignItems: "center",
                  py: 1.2,
                }}
              >
                <Typography fontSize={13} color="primary.main">
                  {r.id}
                </Typography>

                <Typography noWrap fontSize={14}>
                  {r.name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Chip
                    label={r.status}
                    size="small"
                    sx={{
                      bgcolor:
                        r.status === "Expired" ? "#FECACA" : "#FEF3C7",
                      color:
                        r.status === "Expired" ? "#DC2626" : "#92400E",
                    }}
                  />
                  <Typography fontSize={12}>{r.date}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= RIGHT COLUMN ================= */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* ================= MoU STATISTICS CARD ================= */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              p: 2.5,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography fontWeight={600}>MoU Statistics</Typography>
              <Chip label="Monthly" size="small" />
            </Box>

            <Box sx={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#93c5fd" radius={[6, 6, 0, 0]}>
                    <LabelList dataKey="value" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>

          {/* ================= LONG TERM PARTNERSHIPS CARD ================= */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              p: 2.5,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <Typography fontWeight={600} mb={1}>
              Long-term Partnerships
            </Typography>

            {[
              "Francis Xavier Engineering College",
              "Government College of Engineering",
              "PSN College of Engineering and Technology",
            ].map((name, i) => (
              <Box key={i} sx={{ mb: 1.5 }}>
                <Typography fontSize={14}>{name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  Started in 2018 – Active till 2026
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}