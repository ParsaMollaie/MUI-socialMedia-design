import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box } from "@mui/system";
import { InputBase } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Seachbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <VolunteerActivismIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Seachbar>
          <InputBase placeholder="Seach.." />
        </Seachbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/1.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Typography variant="text">Parsa</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
