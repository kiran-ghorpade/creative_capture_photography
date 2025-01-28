import { Box, Stack, Typography } from "@mui/material";

export default function LandingComponent() {
  return (
    <Box height="90vh" sx={{ backdropFilter: "blur(10px)", background:'rgba(0,0,0,0.5)' }}>
      <Stack
        alignItems="center"
        data-aos="fade-up"
        justifyContent="center"
        height={1}
        spacing={4}
      >
        <Typography
          variant="h3"
          fontFamily="Playfair Display"
          fontStyle="italic"
          data-aos="fade-up"
          align="center"
          gutterBottom
        >
          Creative Capture Photography
        </Typography>
        <Typography>EST. 2024</Typography>
      </Stack>
    </Box>
  );
}
