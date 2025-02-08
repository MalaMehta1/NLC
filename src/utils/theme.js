import { Margin } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      50: "hsl(48, 48%, 94%)", //#F7F4E8
      100: "hsl(47, 74%, 85%)", //#F5E8BB
      200: "hsl(47, 80%, 75%)", //#F2DC8B
      300: "hsl(48, 86%, 65%)", //#F2D358
      400: "hsl(47, 87%, 58%)", //#F1C836
      500: "hsl(46, 89%, 54%)", //#F2C022
      600: "hsl(43, 89%, 53%)", //#F2B41C
      700: "hsl(38, 88%, 51%)", //#F0A016
      800: "hsl(34, 89%, 51%)", //#F19213
      900: "hsl(28, 96%, 48%)", //#F07205
    },
    neutral: {
      50: "hsl(240, 17%, 98%)", //#F8F8FA
      100: "hsl(0, 0%, 97%)", //#F7F7F7
      200: "hsl(0, 0%, 89%)", //#E2E2E2
      400: "hsl(60, 1%, 67%)", //#ABABAA
      500: "hsl(0, 0%, 54%)", //#8A8A8A
      600: "hsl(0, 0%, 39%)", //#636363
      800: "hsl(0, 0%, 12%)", //#1E1E1E
      900: "hsl(0, 0%, 0%)", //#000000
    },
    tertiory: {
      //
      300: "hsl(33 78% 46%)", // #D27F1A
      600: "hsl(33 100% 17%)", // #562F00
      800: "hsl(0 0% 12%)", // #1E1E1E
    },
    gradient: {
      //
      100: "hsl(0 0% 11%)",
      200: "hsl(0 0% 11%)",
      400: "hsl(300 3% 8%)",
      600: "hsl(300 3% 8%)",
      800: "hsl(300 3% 8%)",
    },
    success: { 500: "hsl(152 82% 39%)" },
    // #12B76A
    info: { 500: "hsl(34 94% 50%)" },
    // #F79009
    warning: { 500: "hsl(4 74% 49%)" },
    // #D92D20
    "pure-white": { 500: "hsl(0 0% 100%)" },
    // #fff
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Poppins",
    button: {
      fontWeight: 600,
      textTransform: "unset",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          transition: "300ms",
          background:
            "linear-gradient(90deg, var(--primary-600) 0%, var(--primary-800) 100%)",
          "&.Mui-disabled": {
            color: "var(--pure-white-500)",
            background: "var(--neutral-300)",
          },
          padding: '7.5px 16px',
          fontSize: "20px",
          fontWeight: "500",
          textTransform: "uppercase"
        },
        outlined: {
          borderColor: "var(--neutral-50)",
          color: "var(--pure-white-500)",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '15px 16px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          // marginLeft: '0',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'var(--primary-600)',
            color: 'var(--neutral-800)',
          },
          color: '#000',
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "500",
          color: 'var(--pure-white-500)',
          textTransform: "uppercase",
          backgroundColor: 'var(--neutral-800)',

        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
        flexContainer :{
          gap:"1.3%",
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: '37%', 
          marginLeft: 'auto',
        },
      },
    },
  },
});
