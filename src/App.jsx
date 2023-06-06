import Novel from "./Novel";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Anime from "./Anime";
import Manhwa from "./Manhwa";
import Movie from "./Movie";
import Manga from "./Manga";
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
      </Routes>
    </>
  );
}

export default App;
