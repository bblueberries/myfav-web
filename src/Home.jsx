import { Box, Button, Container, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import videoBg from "./assets/homepagebg.mp4";
import { useNavigate } from "react-router";
const Home = () => {
  const videoStyle = {
    width: "100%",
    height: "100%",
    marginBottom: "-10px",
    objectFit: "cover",
  };

  const navigate = useNavigate();
  return (
    <Container
      sx={{ position: "relative", width: "100%", height: "100vh" }}
      disableGutters
      maxWidth="xl"
    >
      {/* <Box sx={overlay}></Box> */}
      <video src={videoBg} autoPlay loop muted style={videoStyle} />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        color={grey[850]}
      >
        <Typography variant="h2">WELCOME</Typography>
        <Typography variant="body1">
          This site is my space to gather all of my favorite
        </Typography>
        <Typography variant="subtitle2">
          Hope you got a good taste :)
        </Typography>
        <Button
          sx={{ mt: 5, fontSize: "22px" }}
          variant="outlined"
          onClick={() => navigate("/novel")}
        >
          LET START
        </Button>
      </Box>
    </Container>
  );
};
export default Home;
