'use client';
import { Box, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react"

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

export const Menu = () => {
    return (
        <Grid2 sx={{
            width: '100%',
            pt: { lg: 2, md: 1 },
            pl: { lg: 2, md: 1 },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            {menuItems.map((i) => (
                <Box key={i.title}>
                    <Box component="span" sx={{
                        display: { lg: 'block', xs: 'none' },
                        mt: 1,
                        color: "black"
                    }}>
                        <Typography>{i.title}</Typography>
                    </Box>
                    {i.items.map((item) => (
                        <Link href={item.href} key={item.label} style={{ textDecoration: "none" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 2,
                                    mt: 2,
                                    color: "darkblue",
                                    textDecoration: "none", 
                                    "&:hover": { color: "blue" },                       
                                }}
                            >
                                <Image src={item.icon} alt={item.label} width={20} height={20} />
                                <Typography variant="body1" sx={{
                                    display: { lg: 'block', xs: 'none' },
                                }}>{item.label} </Typography>
                            </Box>
                        </Link>
                    ))}
                </Box>
            ))}
        </Grid2>
    )
};

export default Menu;
