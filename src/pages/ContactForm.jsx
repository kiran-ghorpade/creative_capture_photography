import { Paper, Stack, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  return (
    <Paper>
      <Stack spacing={2} padding={2} alignItems="center">
        <Stack
          alignItems="center"
          // data-aos="fade-up"
          // justifyContent="center"
          spacing={4}
        >
          <Typography
            variant="h3"
            fontFamily="Playfair Display"
            // data-aos="fade-up"
          >
            Let&apos;s talk
          </Typography>
        </Stack>
        <Stack
          component="form"
          action="mailto:abc@gmail.com?subject:Inquiry About "
          method="post"
          encType="text/plain"
          sx={{ padding: 3, width: { md: 0.5, xs: 1 } }}
          spacing={2}
        >
          <TextField
            variant="standard"
            color="secondary"
            label="Name"
            type="text"
            required
            autoFocus
            fullWidth
          />
          <TextField
            variant="standard"
            color="secondary"
            label="Email"
            type="email"
            required
            fullWidth
          />
          <TextField
            variant="standard"
            color="secondary"
            label="Phone"
            type="tel"
            required
            fullWidth
          />
          <TextField
            variant="standard"
            color="secondary"
            label="Message"
            type="text"
            helperText="Multiple lines are allowed"
            required
            multiline
            fullWidth
          />
          <TextField
            color="secondary"
            value="Send Message"
            type="submit"
            fullWidth
            slotProps={{
              htmlInput: {
                sx: {
                  borderRadius: 0,
                  color: "rgba(212, 205, 193, 1)",
                  padding: 2,
                },
              },
            }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
