import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import theme from "@/theme/theme";
import { Box, Grid2, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={theme}>
            <Grid2
                sx={{
                    display: "flex",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "8%",
                            md: "8%",
                            lg: "16%",
                            xl: "14%",
                        },
                    }}
                >
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "left",
                            }}
                        >
                            <Image src="/logo.png" alt="logo" width={32} height={32} />
                            <Typography
                                sx={{
                                    display: { lg: "block", xs: "none" },
                                    color: "darkblue",
                                }}
                            >
                                SchoolLama
                            </Typography>
                        </Box>
                    </Link>
                    <Menu />
                </Box>
                <Box
                    sx={{
                        width: {
                            xs: "92%",
                            md: "92%",
                            lg: "84%",
                            xl: "86%",
                        },
                        backgroundColor: "#f2f2f2",
                    }}
                >
                    <Navbar></Navbar>
                {children}
                </Box>
            </Grid2>
        </ThemeProvider>
    );
}
