import { Call, Directions, Share, WhatsApp } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

export default function ContactButtons() {
  return (
    <Box>
      <Stack direction="row" justifyContent="center" width={1} gap={2}>
        <Button
          variant="contained"
          sx={{ height: 50, width: 50, bgcolor: "rgba(212, 205, 193, 1)" }}
        >
          <Call />
        </Button>
        <Button
          variant="contained"
          sx={{ height: 50, width: 50, bgcolor: "rgba(212, 205, 193, 1)" }}
        >
          <WhatsApp />
        </Button>
        <Button
          variant="contained"
          sx={{ height: 50, width: 50, bgcolor: "rgba(212, 205, 193, 1)" }}
        >
          <Directions />
        </Button>
        <Button
          variant="contained"
          sx={{ height: 50, width: 50, bgcolor: "rgba(212, 205, 193, 1)" }}
        >
          <Share />
        </Button>
      </Stack>
    </Box>
  );
}
