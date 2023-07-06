import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import CustomDrawer from "./CustomDrawer";
import { grey } from "@mui/material/colors";
import { useLocation } from "react-router";
export default function SearchAppBar() {
  const [topics, setTopics] = React.useState([]);
  const [destination, setDestination] = React.useState({});
  const location = useLocation();

  const currentPath = location.pathname;
  //   console.log(currentPath);

  useEffect(() => {
    let updatedTopics = [];
    let updatedDestination = {};

    switch (currentPath) {
      case "/anime":
        updatedTopics = [];
        updatedDestination = {};
        break;
      case "/manhwa":
        updatedTopics = [];
        updatedDestination = {};
        break;
      case "/novel":
        updatedTopics = [
          "LORD OF THE MYSTERIES",
          "OMNISCIENT READER'S VIEWPOINT",
          "CLASSROOM OF THE ELITE",
        ];
        updatedDestination = {
          [updatedTopics[0]]: "/novel/lotm",
          [updatedTopics[1]]: "/novel/orv",
          [updatedTopics[2]]: "/novel/cote",
        };
        break;
      case "/manga":
        updatedTopics = [];
        updatedDestination = {};
        break;
      case "/movie":
        updatedTopics = [];
        updatedDestination = {};
        break;
      default:
        updatedTopics = [];
        updatedDestination = {};
        break;
    }

    setTopics(updatedTopics);
    setDestination(updatedDestination);
  }, [currentPath]);

  const isHomePage = currentPath === "/";
  return (
    <>
      {!isHomePage && (
        <Box
          sx={{
            flexGrow: 1,
            position: "sticky",
            left: "0",
            top: "0",
            zIndex: "1",
          }}
        >
          <AppBar position="static" sx={{ bgcolor: grey[500] }}>
            <Toolbar>
              <Box
                sx={{ display: "flex", alignItems: "center", flexGrow: "1" }}
              >
                <CustomDrawer />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  //   sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                ></Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "500px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <IconBar currentPath={currentPath} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexGrow: "1",
                  //   position: "absolute",
                }}
              >
                <SearchBar
                  topics={topics}
                  destination={destination}
                  currentPath={currentPath}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}
