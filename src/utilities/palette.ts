import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Palette {
      colors: {
        lamaSky: string;
        lamaSkyLight: string;
        lamaPurple: string;
        lamaPurpleLight: string;
        lamaYellow: string;
        lamaYellowLight: string;
      };
    }
    interface PaletteOptions {
      colors?: {
        lamaSky?: string;
        lamaSkyLight?: string;
        lamaPurple?: string;
        lamaPurpleLight?: string;
        lamaYellow?: string;
        lamaYellowLight?: string;
      };
    }
}