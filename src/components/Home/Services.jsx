import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <Stack bgcolor="rgba(212, 205, 193, 1)" alignItems="center" padding={2} spacing={1}>
      <Grid2 container spacing={1}>
        <Grid2 size={6}>
          <Card>
            <CardMedia
              component="img"
              height={250}
              image={`/logo.png`}
              alt={"image"}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" align="center">
                Wedding
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardMedia
              component="img"
              height={250}
              image={`/logo.png`}
              alt={"image"}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" align="center">
                Birthday
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardMedia
              component="img"
              height={250}
              image={`/logo.png`}
              alt={"image"}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" align="center">
                Naming Ceremony
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardMedia
              component="img"
              height={250}
              image={`/logo.png`}
              alt={"image"}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" align="center">
                Engagement
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          backgroundColor: "black",
          color: "rgba(212, 205, 193, 1)",
          padding: 2,
        }}
        LinkComponent={Link}
        to="/services"
      >
        All Services
      </Button>
    </Stack>
  );
}
