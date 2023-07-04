import * as React from "react";

import {
  BottomNavigationAction,
  BottomNavigation,
  Typography,
} from "@mui/material";
import {
  AutoStories,
  MovieCreation,
  LiveTv,
  AodOutlined,
  SpaceDashboardOutlined,
} from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { grey } from "@mui/material/colors";
// import SearchAppBar from "./SearchBar";

export default function LabelBottomNavigation(props) {
  const currentPath = props.currentPath;
  const [value, setValue] = React.useState(currentPath);
  const navigate = useNavigate();

  const handleChange = (event) => {
    // setValue(newValue);
    // alert("hello");
  };

  useEffect(() => {
    setValue(currentPath); // Update the value when currentPath changes
  }, [currentPath]);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        position: "sticky",
        left: "0",
        top: "0",
        zIndex: "1",
      }}
      value={value}
    >
      <BottomNavigationAction
        label="Anime"
        value="/anime"
        icon={<LiveTv />}
        // showLabel
        onClick={() => navigate("/anime")}
      />
      <BottomNavigationAction
        label="Manhwa"
        value="/manhwa"
        icon={<AodOutlined />}
        // showLabel
        onClick={() => navigate("/manhwa")}
      />
      <BottomNavigationAction
        label="Novel"
        value="/novel"
        icon={<AutoStories />}
        // showLabel
        onClick={() => navigate("/novel")}
      />
      <BottomNavigationAction
        label="Manga"
        value="/manga"
        icon={<SpaceDashboardOutlined />}
        // showLabel
        onClick={() => navigate("/manga")}
      />
      <BottomNavigationAction
        label="Movie"
        value="/movie"
        icon={<MovieCreation />}
        // showLabel
        onClick={() => navigate("/movie")}
      />
    </BottomNavigation>
  );
}
