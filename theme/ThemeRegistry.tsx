"use client"

import { 
  createTheme, 
  ThemeOptions, 
  ThemeProvider
} from "@mui/material/styles";


import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { Poppins } from "next/font/google";
import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { error, indigo, info, neutral, success, warning } from './colors';

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const palette = createPalette();
const components = createComponents({ palette });


const themeOptions: ThemeOptions = {
  //@ts-ignore
  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440
    }
  },
  palette: {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    background: {
      default: common.white,
      paper: common.white
    },
    divider: '#F2F4F7',
    error,
    info,
    mode: 'light',
    //@ts-ignore
    neutral,
    primary: indigo,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38)
    },
    warning
  },
  typography: {
    fontSize: 12,
    fontFamily: poppins.style.fontFamily,
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    button: {
      fontWeight: 600
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.08)',
    '0px 1px 5px rgba(0, 0, 0, 0.08)',
    '0px 1px 8px rgba(0, 0, 0, 0.08)',
    '0px 1px 10px rgba(0, 0, 0, 0.08)',
    '0px 1px 14px rgba(0, 0, 0, 0.08)',
    '0px 1px 18px rgba(0, 0, 0, 0.08)',
    '0px 2px 16px rgba(0, 0, 0, 0.08)',
    '0px 3px 14px rgba(0, 0, 0, 0.08)',
    '0px 3px 16px rgba(0, 0, 0, 0.08)',
    '0px 4px 18px rgba(0, 0, 0, 0.08)',
    '0px 4px 20px rgba(0, 0, 0, 0.08)',
    '0px 5px 22px rgba(0, 0, 0, 0.08)',
    '0px 5px 24px rgba(0, 0, 0, 0.08)',
    '0px 5px 26px rgba(0, 0, 0, 0.08)',
    '0px 6px 28px rgba(0, 0, 0, 0.08)',
    '0px 6px 30px rgba(0, 0, 0, 0.08)',
    '0px 6px 32px rgba(0, 0, 0, 0.08)',
    '0px 7px 34px rgba(0, 0, 0, 0.08)',
    '0px 7px 36px rgba(0, 0, 0, 0.08)',
    '0px 8px 38px rgba(0, 0, 0, 0.08)',
    '0px 8px 40px rgba(0, 0, 0, 0.08)',
    '0px 8px 42px rgba(0, 0, 0, 0.08)',
    '0px 9px 44px rgba(0, 0, 0, 0.08)',
    '0px 9px 46px rgba(0, 0, 0, 0.08)'
  ],

}

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}






