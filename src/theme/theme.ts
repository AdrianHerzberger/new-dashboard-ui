'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import "../utilities/palette.ts";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    colors: {
      lamaSky: "#C3EBFA",
      lamaSkyLight: "#EDF9FD",
      lamaPurple: "#CFCEFF",
      lamaPurpleLight: "#F1F0FF",
      lamaYellow: "#FAE27C",
      lamaYellowLight: "#FEFCE8",
    },
  },
});

export default theme;