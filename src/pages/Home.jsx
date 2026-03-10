import { useContext, useEffect, useState } from "react";
import SongCard from "../features/Player/SongCard";
import PlayerContext from "../context/PlayerContext";

const Home = () => {
  const [randomSong, setRandomSong] = useState(null);
  const { isLoading, songList } = useContext(PlayerContext);

  useEffect(() => {
    if (songList && songList.length > 0) {
      const random = songList[Math.floor(Math.random() * songList.length)];
      setRandomSong(random);
    }
  }, [songList]);

  return (
    <div>
      <h2>Listen to this random song</h2>
      <SongCard song={randomSong} playlist={songList} />
    </div>
  );
};

export default Home;
