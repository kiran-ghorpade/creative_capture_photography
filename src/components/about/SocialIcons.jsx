import { Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

export default function SocialIcons() {
  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="center" width={1} gap={2}>
          <Button sx={{ color: "black", height: 40, width: 40 }}>
            <Call />
          </Button>
          <Button sx={{ color: "black", height: 40, width: 40 }}>
            <WhatsApp />
          </Button>
          <Button sx={{ color: "black", height: 40, width: 40 }}>
            <Instagram />
          </Button>
          <Button sx={{ color: "black", height: 40, width: 40 }}>
            <Facebook />
          </Button>
        </Stack>
      </Box>
    </>
  );
}
