/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const style = {
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    color: "gray",
  },
  fontSize: "small",
};

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        backgroundImage: "none",
        mixBlendMode: "difference",
        backgroundBlendMode: "difference",
      }}
    >
      <Toolbar
        variant="dense"
        disableGutters
        sx={{ width: 1, justifyContent: "space-between", px: 2 }}
      >
        <Paper sx={{ padding: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src="/logo.png" height={25} width={25} />
            <Typography fontStyle="italic">Creative Capture</Typography>
          </Stack>
        </Paper>
        <Box>
          <MenuDrawer style={style} />
          <Stack direction="row">
            {navItems.map((item) => (
              <NavButton key={item.to} to={item.to} label={item.label} />
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function NavButton({ to, label }) {
  return (
    <Button sx={{ display: { xs: "none", md: "block" } }}>
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={style}>{label}</Typography>
      </Link>
    </Button>
  );
}

function MenuDrawer({ style }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <IconButton
        aria-label="open menu"
        // edge="end"
        onClick={handleMenuClick}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <IconButton onClick={handleMenuClose}>
          <Close />
        </IconButton>
        {navItems.map((item) => (
          <MenuItem key={item.to} onClick={handleMenuClose}>
            <Link
              to={item.to}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={style}>{item.label}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Drawer>
    </>
  );
}

export default Navbar;
