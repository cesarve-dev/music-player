import { useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./shared/Layout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";
import PlayerContext from "./features/Player/PlayerContext";
import "./App.css";

// const defaultSong = {
//   title: "Adam's Song",
//   artist: "Blink 182",
//   url: "src/assets/songs/blink-182 - Adam's Song.mp3",
// };

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <PlayerContext.Provider
        value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </PlayerContext.Provider>
    </>
  );
}

export default App;
