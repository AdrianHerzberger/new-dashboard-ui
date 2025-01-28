"use client"
import { Box, Grid, Grid2, Typography } from '@mui/material';
import React from 'react';
import Image from "next/image";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import theme from "@/theme/theme";

const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export const CountCharts = () => {
    const demoUrl = 'https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg';

    return (
        <Grid2 sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            width: "100%",
            height: "100%",
            p: 2,
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
                height: "75%"
            }}>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    </RadialBarChart>
                </ResponsiveContainer>
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
                        }}>Boys (55%)</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid2>
    );

}