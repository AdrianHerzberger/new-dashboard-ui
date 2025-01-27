import { UserCard } from "@/components/UserCard";
import { Box, Grid2 } from "@mui/material";
import React from "react"

export const AdminPage = () => {
  return (
    <Grid2 sx={{
      display: "flex",
      flexDirection: { lg: "row", md: 'column', xs: "column" }
    }}>
      <Box sx={{
        width: {
          lg: 2 / 3
        },
        backgroundColor: "wheat"
      }}>
        <Box>
          <UserCard type="student" />
        </Box>
      </Box>
      <Box sx={{
        width: {
          lg: 1 / 3
        },
        backgroundColor: "grey"
      }}
      >
        r
      </Box>
    </Grid2>
  )
};

export default AdminPage;
