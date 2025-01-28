import { Box, Typography } from "@mui/material";

export default function Address() {
  return (
    <Box>
      <Typography align="center" variant="h6">
        Address
      </Typography>
      <Typography align="center">Koregaon , Satara</Typography>
      <Box
       component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15204.020762099866!2d74.15283331235692!3d17.69721493189822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23466f5afbfff%3A0x5f27b9d70cca11e3!2sKoregaon%2C%20Maharashtra%20415501!5e0!3m2!1sen!2sin!4v1738048572308!5m2!1sen!2sin"
        width={{md:600}}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
