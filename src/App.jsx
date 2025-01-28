import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(212, 205, 193, 1)",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(212, 205, 193, 1)",
    },
  },
  typography: {
    h1: { color: "#ffffff" },
    h2: { color: "#ffffff" },
  },
});

export default function App() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
      // once: true, // Whether the animation should happen only once
    });

    // Optional: Cleanup AOS instance when component is unmounted
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}
