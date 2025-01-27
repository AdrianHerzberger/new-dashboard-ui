'use client';
import { Box, Grid2, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react"

export const Navbar = () => {
    return (
        <Grid2 sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "flex-end",
            ml: 2,
            mr: 2,
        }}>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Image src={"/search.png"} alt="search" width={14} height={14} />
                <Box sx={{ width: 500, maxWidth: "100%" }}>
                    <TextField
                        id="fullWidth"
                        placeholder="Search..."
                        InputProps={{
                            sx: {
                                height: "35px", 
                                borderRadius: "25px", 
                            },
                        }}
                        sx={{
                            borderRadius: "25px"
                        }}
                    />
                </Box>
            </Box>
            <Grid2 sx={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Box sx={{
                    m: 1,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}>
                    <Image src={"/message.png"} alt="message" width={20} height={20} />
                </Box>
                <Box sx={{
                    m: 1,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}>
                    <Image src={"/announcement.png"} alt="message" width={20} height={20} />
                    <Box sx={{
                        position: "absolute",
                        right: 150,
                        top: 5,
                        width: 25,
                        height: 25,
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "purple",
                        alignItems: "center",
                        borderRadius: "25px",
                        color: "white",
                    }}>
                        1
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Typography>John Doe</Typography>
                        <Typography>Admin</Typography>
                    </Box>
                    <Image src={"/avatar.png"} alt="message" width={50} height={50} style={{
                        borderRadius: '25px'
                    }}/>
                </Box>

            </Grid2>
        </Grid2>
    )
};

export default Navbar;
