import { useContext, useEffect, useRef } from "react";
import PlayerContext from "../../context/PlayerContext";
import {
  PlayIcon,
  PauseIcon,
  SkipForwardIcon,
  SkipBackIcon,
} from "@phosphor-icons/react";
import styles from "./Player.module.css";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    currentIndex,
    setCurrenSong,
    setCurrentIndex,
  } = useContext(PlayerContext);
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

  const handleSongEnd = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= currentPlaylist.length) {
      nextIndex = 0;
    }
    const nextSong = currentPlaylist[nextIndex];
    setCurrenSong(nextSong);
    setCurrentIndex(nextIndex);
  };

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
      <audio ref={audioRef} onEnded={handleSongEnd}></audio>
      <div className={styles.buttonContainer}>
        <button aria-label="Play song" onClick={() => setIsPlaying(true)}>
          <PlayIcon size={24} />
        </button>
        <button aria-label="Pause song" onClick={() => setIsPlaying(false)}>
          <PauseIcon size={24} />
        </button>
        <button>
          <SkipBackIcon size={24} weight="fill" />
        </button>
        <button>
          <SkipForwardIcon size={24} weight="fill" />
        </button>
      </div>
      {/* add music length bar */}
    </div>
  );
};

export default Player;
