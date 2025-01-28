import { ImageList, ImageListItem, Stack } from "@mui/material";

export default function MainImages() {
  return (
    <Stack bgcolor="white" alignItems="center" justifyContent="center" padding={2}>
      <ImageList data-aos="fade-up" variant="standard" cols={3} gap={8}>
        <ImageListItem>
          <img
            srcSet={`/logo.png`}
            src={`?w=248&fit=crop&auto=format`}
            alt={"image"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet={`/logo.png`}
            src={`?w=248&fit=crop&auto=format`}
            alt={"image"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet={`/logo.png`}
            src={`?w=248&fit=crop&auto=format`}
            alt={"image"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet={`/logo.png`}
            src={`?w=248&fit=crop&auto=format`}
            alt={"image"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet={`/logo.png`}
            src={`?w=248&fit=crop&auto=format`}
            alt={"image"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet={`/logo.png`}
            src={`?w=248&fit=crop&auto=format`}
            alt={"image"}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Stack>
  );
}
