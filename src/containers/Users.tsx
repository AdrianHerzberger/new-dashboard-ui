"use client"
import UserCard from "@/components/UserCard";
import { Box, Grid2 } from "@mui/material";
import React from "react"
import theme from "@/theme/theme";

export const Users = ({

}) => {
    const userCards = [
        {
            type: "Student",
            color: theme.palette.colors.lamaPurple
        },
        {
            type: "Teacher",
            color: theme.palette.colors.lamaYellow
        },
        {
            type: "Parent",
            color: theme.palette.colors.lamaPurple
        },
        {
            type: "Staff",
            color: theme.palette.colors.lamaYellow
        },
    ]

    return (
        <Grid2 sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {lg: "center"},
            flexWrap: {lg: "nowrap", xs: "wrap"}
        }}>
            {userCards.map((card, index) => (
                <Box key={index} sx={{
                    p: 1,
                }}>
                    <UserCard key={index} type={card.type} color={card.color} />
                </Box>
            ))}
        </Grid2>
    )
};

export default Users;
