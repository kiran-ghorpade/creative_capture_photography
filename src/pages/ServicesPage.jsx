import { Box, Button, Stack, Typography } from "@mui/material";
import Features from "../components/about/Features";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={1}
        padding={2}
      >
        <Features />
      </Stack>
      <Stack
        bgcolor="white"
        color="black"
        direction="row"
        flexWrap="wrap"
        padding={2}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        // data-aos="fade-up"
      >
        <Box component="img" src={"logo.png"} height={200} width={400} />
        <Stack
          alignItems="center"
          justifyContent="space-around"
          color="black"
          spacing={2}
          paddingX={10}
        >
          <Box>
            <Typography
              align="center"
              fontFamily="Playfair Display"
              variant="h4"
            >
              Wedding
            </Typography>
            <Typography
              align="center"
              fontFamily="Playfair Display"
              variant="h6"
            >
              Packages
            </Typography>
            <Typography align="center" variant="body2">
              Start at
            </Typography>
            <Typography align="center" variant="h5" fontStyle="italic">
              $4,000
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ border: "2px solid" }}
            LinkComponent={Link}
            to="/message"
          >
            Inquire
          </Button>
        </Stack>
      </Stack>
      <Stack
        bgcolor="white"
        color="black"
        direction="row-reverse"
        flexWrap="wrap"
        padding={2}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        // data-aos="fade-up"
      >
        <Box component="img" src={"logo.png"} height={200} width={400} />
        <Stack
          alignItems="center"
          justifyContent="space-around"
          color="black"
          spacing={2}
          paddingX={10}
        >
          <Box>
            <Typography
              align="center"
              fontFamily="Playfair Display"
              variant="h4"
            >
              Wedding
            </Typography>
            <Typography
              align="center"
              fontFamily="Playfair Display"
              variant="h6"
            >
              Packages
            </Typography>
            <Typography align="center" variant="body2">
              Start at
            </Typography>
            <Typography align="center" variant="h5" fontStyle="italic">
              $4,000
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ border: "2px solid" }}
            LinkComponent={Link}
            to="/message"
          >
            Inquire
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
