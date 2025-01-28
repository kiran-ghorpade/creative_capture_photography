import { Button, Stack, Typography } from "@mui/material";
import Carousel from "../Gallary/Corousel";
import { Link } from "react-router-dom";

export default function GallarySlide() {
  return (
    <Stack
      bgcolor="transperent"
      sx={{ backdropFilter: "blur(30px)" }}
      alignItems="center"
      color="black"
      justifyContent="center"
      data-aos="fade-up"
      spacing={5}
      padding={3}
    >
      <Carousel />
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          bgcolor: "rgba(212, 205, 193, 1)",
          color: "black",
          padding: 2,
        }}
        LinkComponent={Link}
        to="/gallery"
      >
        <Typography>View Gallery</Typography>
      </Button>
    </Stack>
  );
}
