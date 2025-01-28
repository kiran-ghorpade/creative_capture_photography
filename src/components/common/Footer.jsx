import { Facebook, Instagram, Mail } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-evenly"
      gap={3}
      padding={3}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent="center"
        spacing={3}
      >
        <Stack justifyContent="center" spacing={1}>
          <Typography
            variant="h5"
            fontFamily="Playfair Display"
            align="center"
            fontStyle="italic"
          >
            Connect
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Instagram />
            <Facebook />
            <Mail />
          </Stack>
        </Stack>
        <Divider
          orientation={{ md: "vertical" }}
          sx={{
            height: { md: "inherit", xs: "2px" },
            background: "white",
            width: { md: "2px", xs: "inherit" },
          }}
        />
        <Stack justifyContent="center">
          <Typography variant="body1" align="center">
            Koregaon, Dist. Satara, State Maharashtra
          </Typography>
          <Typography variant="body1" align="center">
            +91 9876543210
          </Typography>
        </Stack>
        <Divider
          orientation={{ md: "vertical" }}
          sx={{
            height: { md: "inherit", xs: "2px" },
            background: "white",
            width: { md: "2px", xs: "inherit" },
          }}
        />
        <Stack justifyContent="center" alignItems='center' spacing={1}>
          <Typography variant="body1" align="center">
            For More Info
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ border: "3px solid" }}
            LinkComponent={Link}
            to="/message"
          >
            Inquire
          </Button>
        </Stack>
      </Stack>
      <Box>
        <Typography>©2024 Capture Creativity Photography</Typography>
      </Box>
    </Stack>
  );
}
