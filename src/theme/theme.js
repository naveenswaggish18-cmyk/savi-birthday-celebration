import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#EC4899",
    },

    secondary: {
      main: "#8B5CF6",
    },

    background: {
      default: "#0F172A",
      paper: "rgba(255,255,255,0.08)",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 600,
    },

    h4: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "12px 28px",
          fontSize: "1rem",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        },
      },
    },
  },
});

export default theme;