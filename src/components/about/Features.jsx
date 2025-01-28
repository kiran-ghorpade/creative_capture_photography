import {
    AttachMoney,
    Brush,
    CameraAlt,
    History,
    LocalShipping,
    ThumbUp,
} from "@mui/icons-material";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";

const features = [
  {
    label: "Affordable packages tailored to your needs.",
    icon: <AttachMoney />,
  },
  {
    label: "State-of-the-art equipments for stunning results.",
    icon: <CameraAlt />,
  },
  { label: "2+ years of experience in photography.", icon: <History /> },

  { label: "Creative and Unique Style.", icon: <Brush /> },

  { label: "Client Satisfaction", icon: <ThumbUp /> },

  { label: "Fast Delivery.", icon: <LocalShipping /> },
];

export default function Features() {
  return (
    <>
      <Stack
        // bgcolor="white"
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box padding={5}>
          <Typography
            align="center"
            fontStyle="italic"
            fontFamily="Playfair Display"
            variant="h4"
          >
            Why Choose us?
          </Typography>
          <List dense>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>{feature.icon}</ListItemIcon>
                <ListItemText primary={feature.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </>
  );
}
