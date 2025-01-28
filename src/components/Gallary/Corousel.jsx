/* eslint-disable react/prop-types */
import { Box, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";

export default function Carousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slide: true,
  };

  const images = ["logo.png", "logo.png", "logo.png", "logo.png", "logo.png"];

  const ImageCard = ({ src }) => {
    return (
      <Card sx={{ m: 2 }}>
        <CardMedia component="img" height={250} image={src} loading="lazy" />
      </Card>
    );
  };

  return (
    <Box width="95%" margin="auto">
      <Slider {...settings} centerMode>
        {images.map((image, index) => (
          <ImageCard key={index} src={`/${image}`} />
        ))}
      </Slider>
    </Box>
  );
}
