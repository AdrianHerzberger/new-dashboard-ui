
import { CountCharts } from "@/components/CountCharts";
import Users from "@/containers/Users";
import { Box, Grid2 } from "@mui/material";
import React from "react";


export const AdminPage = ({ }) => {
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
          m: 2,
          gap: 2,

        }}>
          <Users />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: { lg: "row" },
          justifyContent: "center",
          gap: 2,
          p: 2,
        }}>
          <Box sx={{
            width: {
              lg: 1 / 3,
            },
            height: {
              lg: "450px",
            },
          }}>
            <CountCharts />
          </Box>
          <Box sx={{
            width: {
              lg: 2 / 3,
            },
            height: {
              lg: "450px",
            },
          }}>
            Attendence Chart
          </Box>
        </Box>
      </Box>
      <Box sx={{
        width: {
          lg: 1 / 3
        },
      }}>
        r
      </Box>
    </Grid2>
  )
};

export default AdminPage;
