import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function TeamInfo() {
  return (
    <Stack
      bgcolor="rgba(212, 205, 193, 1)"
      direction="row"
      alignItems="center"
      justifyContent="center"
      // data-aos="fade-up"
      flexWrap="wrap"
      padding={2}
    >
      <ImageList variant="standard" gap={5}>
        <ImageListItem>
          <Box component="img" height={150} src="/logo.png" />
        </ImageListItem>
        <ImageListItem>
          <Box component="img" height={150} src="/logo.png" />
        </ImageListItem>
        <ImageListItem>
          <Box component="img" height={150} src="/logo.png" />
        </ImageListItem>
        <ImageListItem>
          <Box component="img" height={150} src="/logo.png" />
        </ImageListItem>
      </ImageList>
      <Stack
        alignItems="center"
        justifyContent="space-around"
        color="black"
        spacing={2}
        width={{md:0.5}}
      >
        <Typography
          align="center"
          fontStyle="italic"
          fontFamily="Playfair Display"
          variant="h4"
        >
          Hi, we are <br /> Team Creative Capture!
        </Typography>
        <Typography align="center">Here to capture your joy</Typography>
        <Divider
          sx={{ height: "3px", bgcolor: "black", width: 0.5 }}
        />
        <Box width={0.7}>
          <Typography align="center" variant="body2">
            When I first got asked to photograph a wedding back in 2012, I had
            no idea the journey I was about to set out on. Since then I have
            captured hundreds of weddings. I am passionate about creating images
            that artfully embody your love&apos;s uniqueness, while preserving
            the memories you want to hold on to for a lifetime.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            backgroundColor: "black",
            color: "rgba(212, 205, 193, 1)",
            padding: 2,
          }}
          LinkComponent={Link}
          to="/about"
        >
          More About Our Team
        </Button>
      </Stack>
    </Stack>
  );
}
