import { Box, Container, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import videoBg from "./assets/homepagebg.mp4";
const Home = () => {
  const videoStyle = {
    width: "100%",
    height: "100%",
    marginBottom: "-10px",
    objectFit: "cover",
  };
  const overlay = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0,0.9)",
  };
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
      </Box>
    </Container>
  );
};
export default Home;
