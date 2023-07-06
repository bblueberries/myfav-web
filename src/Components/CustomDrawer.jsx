import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router";
import { Container, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem key={"hello"} disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText
              primary={"HOME"}
              primaryTypographyProps={{ variant: "subtitle2" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["About me", "Exit"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={index % 2 === 0 ? () => navigate("/about") : null}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <AccountBoxIcon /> : <ExitToAppIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: "subtitle2" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Container>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{ mr: 0 }}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: grey[300],
              color: grey[800],
            },
          }}
        >
          {list()}
        </Drawer>
      </Container>
    </div>
  );
}
