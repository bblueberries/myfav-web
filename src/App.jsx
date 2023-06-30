import Novel from "./Novel";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Anime from "./Anime";
import Manhwa from "./Manhwa";
import Movie from "./Movie";
import Manga from "./Manga";
import Lotm from "./NovelPages/lotm";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manhwa" element={<Manhwa />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/novel/lotm" element={<Lotm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
