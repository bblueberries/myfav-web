import { useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {!isHomePage && (
        <Container
          sx={{
            bgcolor: grey[500],
            height: 150,
            mt: 20,
            borderTop: "5px solid grey",
            display: "flex",
            justifyContent: "center",
          }}
          maxWidth={false}
        >
          <Grid container direction={"column"} xs={2}>
            <Grid
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                px: 4,
                mt: 3,
              }}
            >
              <Grid item>
                <IconButton onClick={() => alert("Hiii")}>
                  <Avatar
                    variant="rounded"
                    alt="InstagramIcon"
                    src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton onClick={() => alert("Hiii")}>
                  <Avatar
                    alt="DiscordIcon"
                    src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton onClick={() => alert("Hiii")}>
                  <Avatar
                    alt="githubIcon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item mt={1}>
              <Typography align="center" variant="subtitle2">
                Contact me!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
