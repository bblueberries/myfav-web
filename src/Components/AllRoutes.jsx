import React from "react";
import Home from "../Home";
import Anime from "../Anime";
import Manhwa from "../Manhwa";
import Novel from "../Novel";
import Movie from "../Movie";
import Manga from "../Manga";
import Lotm from "../NovelPages/lotm";
import Orv from "../NovelPages/orv";
import Windbreaker from "../ManhwaPage/windbreaker";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../About";

export default function AllRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manhwa" element={<Manhwa />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/novel/lotm" element={<Lotm />} />
        <Route path="/novel/orv" element={<Orv />} />
        <Route path="/manhwa/windbreaker" element={<Windbreaker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
