"use client"
import { Box, Grid, Grid2, Typography } from '@mui/material';
import React from 'react';
import Image from "next/image";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import theme from "@/theme/theme";

const data = [
    {
        name: 'Total',
        count: 100,
        fill: "white",
    },
    {
        name: 'Girls',
        count: 55,
        fill: theme.palette.colors.lamaYellow,
    },
    {
        name: 'Boys',
        count: 45,
        fill: theme.palette.colors.lamaSky,
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export const CountCharts = () => {
    return (
        <Grid2 sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            width: "100%",
            height: "100%",
            p: {lg: 2, mx: 0},
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography sx={{
                    fontWeight: 600,
                }}>Students</Typography>
                <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
            </Box>
            <Box sx={{
                width: "100%",
                height: "80%",
                position: "relative",
            }}>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="40%" innerRadius="10%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Box
                    sx={{
                        position: "absolute", 
                        top: "40%", 
                        left: "50%", 
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image src={"/maleFemale.png"} alt="gender" width={50} height={50} />
                </Box>
            </Box>
            <Grid sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
            }}>
                <Box>
                    <Box sx={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "15px",
                        backgroundColor: theme.palette.colors.lamaSky
                    }} />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: "14px"
                        }} component={"span"}>1,234</Typography>
                        <Typography sx={{
                            fontSize: "10px",
                            color: "lightgrey"
                        }}>Boys (55%)</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "15px",
                        backgroundColor: theme.palette.colors.lamaYellow
                    }} />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: "14px"
                        }} component={"span"}>1,234</Typography>
                        <Typography sx={{
                            fontSize: "10px",
                            color: "lightgrey"
                        }}>Girls (55%)</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid2>
    );

}