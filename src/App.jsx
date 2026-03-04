import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./shared/Layout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";
import PlayerContext from "./features/Player/PlayerContext";
import "./App.css";

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
const token = `Bearer ${import.meta.env.VITE_PAT}`;

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true);
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch songs");
        }
        const data = await response.json();
        const songs = data.records.map((record) => {
          const song = {
            id: record.id,
            title: record.fields.title,
            artist: record.fields.artist,
            url: record.fields.url,
          };
          return song;
        });
        // console.log("Fetched data:", songs);
        setSongList([...songs]);
      } catch (error) {
        setErrorMessage(error.message);
        console.error("Error fetching songs:", errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSongs();
  }, []);

  return (
    <>
      <PlayerContext.Provider
        value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}
      >
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home songList={songList} isLoading={isLoading} />}
            />
            <Route path="/library" element={<Library songList={songList} />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </PlayerContext.Provider>
    </>
  );
}

export default App;
