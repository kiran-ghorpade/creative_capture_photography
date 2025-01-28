import { Button, Divider, Stack, Typography } from "@mui/material";
import Address from "../components/contact/Address";
import ContactButtons from "../components/contact/ContactButtons";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <Stack
      spacing={2}
      padding={2}
      alignItems="center"
      bgcolor="white"
      color="black"
    >
      <Stack
        alignItems="center"
        // data-aos="fade-up"
        // justifyContent="center"
        height={1}
        spacing={4}
      >
        <Typography
          variant="h3"
          fontFamily="Playfair Display"
          // data-aos="fade-up"
        >
          Creative Capture Photography
        </Typography>
      </Stack>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ border: "3px solid" }}
        LinkComponent={Link}
        to="/message"
      >
        Inquire
      </Button>
      <ContactButtons />
      <Divider sx={{ height: "3px", background: "black", width: 0.5 }} />
      <Address />
    </Stack>
  );
}
