import { createTheme } from "@mui/material/styles";
import typography from "./typography"; // You can keep typography the same, or modify it as per preference
import shadows from "./shadows"; // Keep shadows as is, or customize if needed

export const theme = createTheme({
  shadows,
  typography,
  palette: {
    mode: "dark",
    divider: "rgb(194, 149, 217)", // Light purple divider color
    background: {
      default: "rgb(48, 25, 52)", // Dark purple background
      paper: "rgb(169, 110, 187)", // Lighter purple paper background
    },
    text: {
      primary: "rgb(240, 230, 250)", // Light lavender text
      secondary: "rgb(211, 160, 214)", // Soft lilac pinkish text (more subtle)
      default:"rgb(102, 68, 108)"
    },
    primary: {
      main: "rgb(221, 160, 221)", // Lavender pink for primary
    },
    secondary: {
      main: "rgb(128, 0, 128)", // Purple for secondary
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "rgb(221, 160, 221)", // Lavender pink button (muted)
          color: "white", // Button text color white
          "&:hover": {
            backgroundColor: "rgb(186, 85, 211)", // Lighter purple pinkish hover effect
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(128, 0, 128, 0.8)', // Purple tooltip background
          border: '2px solid rgb(169, 110, 187)', // Light purple border
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
