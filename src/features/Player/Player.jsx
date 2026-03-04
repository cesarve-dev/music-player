import { useContext, useEffect, useRef } from "react";
import PlayerContext from "../../context/PlayerContext";
import styles from "./Player.module.css";

const Player = () => {
  const { currentSong, isPlaying, setIsPlaying } = useContext(PlayerContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!currentSong) {
    return <p>No song selected</p>;
  }

  return (
    <div class={styles.playerContainer}>
      <div>
        <p>Now Playing: {currentSong.title}</p>
        <p>Artist: {currentSong.artist}</p>
      </div>
      <audio ref={audioRef}></audio>
      <div className={styles.buttonContainer}>
        <button onClick={() => setIsPlaying(true)}>Play</button>
        <button onClick={() => setIsPlaying(false)}>Pause</button>
        {/* skip button */}
      </div>
      {/* add music length bar */}
    </div>
  );
};

export default Player;
