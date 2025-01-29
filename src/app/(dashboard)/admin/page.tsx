import AttendenceChart from "@/components/AttendenceChart";
import { CountCharts } from "@/components/CountCharts";
import EventCalendar from "@/components/EventCalendar/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import Users from "@/containers/Users";
import { Box, Grid2 } from "@mui/material";
import React from "react";


export const AdminPage = ({

}) => {
  return (
    <Grid2 sx={{
      display: "flex",
      flexDirection: { lg: "row", md: 'column', xs: "column" }
    }}>
      <Box sx={{
        width: {
          lg: 2 / 3
        },
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: { lg: "row" },
          justifyContent: "center",
          gap: 2,
        }}>
          <Users />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: { lg: "row" },
          justifyContent: "center",
          gap: 2,
          p: 1,
        }}>
          <Box sx={{
            width: {
              lg: 1 / 3,
            },
            height: {
              lg: "400px",
            },
          }}>
            <CountCharts />
          </Box>
          <Box sx={{
            width: {
              lg: 2 / 3,
            },
            height: {
              lg: "400px",
            },
          }}>
            <AttendenceChart />
          </Box>
        </Box>
        <Box sx={{
          p: 1,
          height: {
            lg: "390px",
          },
        }}>
          <FinanceChart />
        </Box>
      </Box>
      <Box sx={{
        width: {
          lg: 1 / 3
        },
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          pr: 1,
          pt: 1,
        }}>
          <EventCalendar />
        </Box>
      </Box>
    </Grid2>
  )
};

export default AdminPage;
