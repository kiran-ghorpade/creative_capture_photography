import { Grid2, Stack, Typography } from "@mui/material";
import TeamMemberInfo from "../components/about/TeamMemberInfo";

export default function AboutPage() {
  return (
    <>
      
      <Stack
        bgcolor="rgba(212, 205, 193, 1)"
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        <Typography
          align="center"
          fontFamily="Playfair Display"
          variant="h4"
          color="black"
        >
          Meet Our Team
        </Typography>
        <Typography
          align="center"
          fontFamily="Playfair Display"
          variant="body1"
          color="black"
        >
          We are a diverse team of photographers, each with a unique style and
          passion for storytelling.
          <br /> Together, we ensure your memories are captured with creativity
          and care
        </Typography>
      </Stack>
      <Grid2 container sx={{ bgcolor: "white" }}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <TeamMemberInfo />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <TeamMemberInfo />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <TeamMemberInfo />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <TeamMemberInfo />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <TeamMemberInfo />
        </Grid2>
      </Grid2>
    </>
  );
}
