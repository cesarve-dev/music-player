import { useContext, useEffect, useRef } from "react";
import PlayerContext from "../../context/PlayerContext";
import { PlayIcon, PauseIcon } from "@phosphor-icons/react";
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
    <div className={styles.playerContainer}>
      <div className={styles.songDataContainer}>
        <p>
          Now Playing: <span>{currentSong.title}</span>
        </p>
        <p>
          Artist: <span>{currentSong.artist}</span>
        </p>
      </div>
      <audio ref={audioRef}></audio>
      <div className={styles.buttonContainer}>
        <button onClick={() => setIsPlaying(true)}>
          <PlayIcon size={24} />
        </button>
        <button onClick={() => setIsPlaying(false)}>
          <PauseIcon size={24} />
        </button>
        {/* skip button */}
      </div>
      {/* add music length bar */}
    </div>
  );
};

export default Player;
