import { useEffect, useState } from "react";
import SongCard from "../features/Player/SongCard";

const Home = ({ songList, isLoading }) => {
  // console.log("Home component mounted/rendered");
  const [randomSong, setRandomSong] = useState(null);

  useEffect(() => {
    // console.log("useEffect is running!");
    console.log("songList in Home:", songList);
    if (songList && songList.length > 0) {
      const random = songList[Math.floor(Math.random() * songList.length)];
      // console.log("Setting randomSong to:", random);
      setRandomSong(random);
    }
  }, [songList]);
  return (
    <div>
      <h2>Listen to this song</h2>
      {isLoading ? <p>Loading...</p> : <SongCard song={randomSong} />}
    </div>
  );
};

export default Home;
