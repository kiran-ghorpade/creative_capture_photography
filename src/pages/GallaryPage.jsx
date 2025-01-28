import { Container, Grid2, Stack } from "@mui/material";
import CategoryCard from "../components/Gallary/CategoryCard";
import Carousel from "../components/Gallary/Corousel";

export default function GallaryPage() {
  return (
    <Stack alignItems='center' spacing={2} bgcolor='white'>
      <Carousel />
      <Container>
        <Grid2 container>
          <Grid2 size={{md:6, xs:12}}>
            <CategoryCard type="Wedding" />
          </Grid2>
          <Grid2 size={{md:6, xs:12}}>
            <CategoryCard type="PreWedding" />
          </Grid2>
          <Grid2 size={{md:6, xs:12}}>
            <CategoryCard type="Naming Ceremony" />
          </Grid2>
          <Grid2 size={{md:6, xs:12}}>
            <CategoryCard type="Birthdays" />
          </Grid2>
        </Grid2>
      </Container>
    </Stack>
  );
}
