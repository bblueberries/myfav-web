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
import Anime from "./Anime";
import { useNavigate } from "react-router";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("value");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        backgroundColor: "grey",
      }}
      value={value}
      onChange={handleChange}
      position="center"
    >
      <BottomNavigationAction
        label="Anime"
        value="anime"
        icon={<LiveTv />}
        onClick={() => navigate("/anime")}
        // LinkComponent={Anime}
      />
      <BottomNavigationAction
        label="Manhwa"
        value="manhwa"
        icon={<AodOutlined />}
        onClick={() => navigate("/manhwa")}
        // href="/manhwa"
      />
      <BottomNavigationAction
        label="Novel"
        value="novel"
        icon={<AutoStories />}
        onClick={() => navigate("/novel")}
        // href="/novel"
      />
      <BottomNavigationAction
        label="Manga"
        value="manga"
        icon={<SpaceDashboardOutlined />}
        onClick={() => navigate("/manga")}
        // href="/manga"
      />
      <BottomNavigationAction
        label="Movie"
        value="movie"
        icon={<MovieCreation />}
        onClick={() => navigate("/movie")}
      />
    </BottomNavigation>
  );
}
