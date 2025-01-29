"use client"
import { Box, Grid2, Typography } from "@mui/material";
import React, { useState } from "react"
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import classes from "./EventCalander.module.css"
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export const EventCalendar = ({

}) => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <Grid2 sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "white",
            borderRadius: "15px",
            p: 2,
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Calendar className={classes.reactCalendar} onChange={onChange} value={value} />
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                }}>
                    <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
            }}>
                {events.map((event) => (
                    <Box key={event.id}>
                        <Box sx={{
                            display: "flex",
                            justifyItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <Typography variant="h6">{event.title}</Typography>
                            <Box component={"span"}>
                                {event.time}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Grid2>
    )
};

export default EventCalendar;
