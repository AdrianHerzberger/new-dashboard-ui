"use client"
import { Box, Grid, Grid2, Typography } from "@mui/material";
import React from "react"
import Image from "next/image";


type UserCardProps = {
  type: string,
  color: string,
}

export const UserCard = ({
  type,
  color,
}: UserCardProps) => {
  return (
    <Grid2 sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "15px",
      width: "155px",
      height: "120px",
      backgroundColor: color,
    }}>
      <Grid sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 4,
      }}>
        <Box>
          <Box component="span" sx={{
              fontSize: "14px",
              backgroundColor: "white",
              borderRadius: "15px",
              p: 1,
          }}>
            2024/25
          </Box>
          <Typography variant="h6" sx={{
            mt: 2,
            mb: 1,
          }}>1,234</Typography>
          <Typography sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "grey"
          }}>{type}</Typography>
          
        </Box>
        <Box>
          <Image src={"/more.png"} alt="more" width={20} height={20} />
        </Box>
      </Grid>
    </Grid2>
  )
};

export default UserCard;
