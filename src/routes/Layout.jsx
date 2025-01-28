import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
