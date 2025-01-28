import { Box } from "@mui/material";
import GallarySlide from "../components/Home/GallarySlide";
import LandingComponent from "../components/Home/LandingComponent";
import MainImages from "../components/Home/MainImages";
import Services from "../components/Home/Services";
import TeamInfo from "../components/Home/TeamInfo";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/jeremy-wong-weddings.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <LandingComponent />
        <TeamInfo />
        <MainImages />
        <Services />
        <GallarySlide />
      </Box>
    </>
  );
}
