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

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setValue(path);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        backgroundColor: grey[500],
      }}
      value={value}
      onChange={handleChange}
      position="center"
    >
      <BottomNavigationAction
        label="Anime"
        value="/anime"
        icon={<LiveTv />}
        onClick={() => navigate("/anime")}
      />
      <BottomNavigationAction
        label="Manhwa"
        value="/manhwa"
        icon={<AodOutlined />}
        onClick={() => navigate("/manhwa")}
      />
      <BottomNavigationAction
        label="Novel"
        value="/novel"
        icon={<AutoStories />}
        onClick={() => navigate("/novel")}
      />
      <BottomNavigationAction
        label="Manga"
        value="/manga"
        icon={<SpaceDashboardOutlined />}
        onClick={() => navigate("/manga")}
      />
      <BottomNavigationAction
        label="Movie"
        value="/movie"
        icon={<MovieCreation />}
        onClick={() => navigate("/movie")}
      />
    </BottomNavigation>
  );
}
