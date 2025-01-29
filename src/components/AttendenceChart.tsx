"use client"
import { Box, Grid2, Typography } from "@mui/material";
import React from "react"
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import theme from "@/theme/theme";

const data = [
    {
        name: 'Monday',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tuesday',
        present: 20,
        absent: 80,
    },
    {
        name: 'Wedensday',
        present: 99,
        absent: 1,
    },
    {
        name: 'Thursday',
        present: 66,
        absent: 34,
    },
    {
        name: 'Friday',
        present: 56,
        absent: 44,
    },
];

export const AttendenceChart = ({

}) => {
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
                justifyContent: "space-between",
                mb: 1,
            }}>
                <Typography sx={{
                    fontWeight: 600,
                }}>Attendence</Typography>
                <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
            </Box>
            <Box sx={{
                width: "100%",
                height: "100%",
            }}>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            style={{ fontFamily: theme.typography.fontFamily}}
                            tick={{ fill: "#d1d5db" }}
                        />
                        <YAxis axisLine={false}  tick={{fill:"#ddd"}}/>
                        <Tooltip contentStyle={{
                            borderRadius: "10px",
                            borderColor: "lightgray",
                            fontFamily: theme.typography.fontFamily
                        }}/>
                        <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                        <Bar
                            dataKey="present"
                            fill={theme.palette.colors.lamaYellow}
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="absent"
                            fill={theme.palette.colors.lamaSky}
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Grid2>
    )
};

export default AttendenceChart;
