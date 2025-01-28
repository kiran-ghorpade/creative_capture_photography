import { Box, Card, CardMedia, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
const CategoryCard = ({ type }) => {
  return (
    <Card sx={{ m: 2 }}>
      <Box position="relative">
        <CardMedia
          component="img"
          maxHeight={250}
          image={"/logo.png"}
          loading="lazy"
          sx={{
            opacity: 0.1,
            "&:hover": {
              opacity: 0.5,
            },
          }}
        />
        <Box position="absolute" bottom={0} left={0} width={1} padding={10}>
          <Typography variant="h5" align="center">
            {type}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CategoryCard;
