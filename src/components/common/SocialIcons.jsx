import {
  Call,
  Directions,
  Facebook,
  Instagram,
  Share,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

export default function SocialIcons() {
  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="center" width={1} gap={2}>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", height: 40, width: 40 }}
          >
            <Call />
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", height: 40, width: 40 }}
          >
            <WhatsApp />
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", height: 40, width: 40 }}
          >
            <Instagram />
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", height: 40, width: 40 }}
          >
            <Facebook />
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", height: 40, width: 40 }}
          >
            <Directions />
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", height: 40, width: 40 }}
          >
            <Share />
          </Button>
        </Stack>
      </Box>
    </>
  );
}
