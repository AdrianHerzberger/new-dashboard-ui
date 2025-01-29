"use client"
import { Box, Grid2, Typography } from "@mui/material";
import React from "react"
import Image from "next/image";
import theme from "@/theme/theme";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'Mai',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jun',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Jul',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Sep',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Oct',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Nov',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Dec',
        income: 3490,
        expense: 4300,
    },
];

export const FinanceChart = () => {
    return (
        <Grid2 sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            width: "100%",
            height: "100%",
            p: { lg: 2, mx: 0 },
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
            }}>
                <Typography sx={{
                    fontWeight: 600,
                }}>Finance</Typography>
                <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
            </Box>
            <Box sx={{
                width: "100%",
                height: "100%",
            }}>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: "#ddd" }}
                            style={{
                                fontFamily: theme.typography.fontFamily
                            }} />
                        <YAxis
                            tick={{ fill: "#ddd" }}
                            style={{
                                fontFamily: theme.typography.fontFamily
                            }} />
                        <Tooltip 
                            contentStyle={{
                            borderRadius: "10px",
                            borderColor: "lightgray",
                            fontFamily: theme.typography.fontFamily
                        }} />
                        <Legend 
                            align="left" 
                            verticalAlign="top" 
                            wrapperStyle={{ 
                                paddingTop: "20px", 
                                paddingBottom: "40px" 
                            }}
                            style={{
                                fontFamily: theme.typography.fontFamily
                            }}
                        />
                        <Line type="monotone" dataKey="income" stroke={theme.palette.colors.lamaYellow} activeDot={{ r: 8 }} strokeWidth={4} />
                        <Line type="monotone" dataKey="expense" stroke={theme.palette.colors.lamaSky} strokeWidth={4} />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Grid2 >
    )
};

export default FinanceChart;
