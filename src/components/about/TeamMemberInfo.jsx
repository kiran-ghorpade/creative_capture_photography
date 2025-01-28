/* eslint-disable react/prop-types */
import { Box, Divider, Stack, Typography } from "@mui/material";
import SocialIcons from "./SocialIcons";

const TeamMemberInfo = ({
  img = "/logo.png",
  name = "shubham yewale",
  experties = "Expert in album designing",
}) => {
  return (
    <Stack
      bgcolor="white"
      color="black"
      direction="row"
      flexWrap="wrap"
      padding={2}
      alignItems="center"
      justifyContent="center"
      data-aos="fade-up"
    >
      <Box component="img" src={img} />
      <Stack
        alignItems="center"
        justifyContent="space-around"
        color="black"
        width={0.5}
        spacing={2}
      >
        <Typography
          align="center"
          fontStyle="italic"
          fontFamily="Playfair Display"
          variant="h5"
        >
          {name.toUpperCase()} !
        </Typography>
        <Typography align="center"> {experties}</Typography>
        <SocialIcons />
        <Divider sx={{ height: "3px", background: "black", width: 0.8 }} />
      </Stack>
      {/* <Box width={0.7}>
            <Typography align="center" variant="body2">
              {msg}
            </Typography>
          </Box> */}
    </Stack>
  );
};

export default TeamMemberInfo;
