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
    setCurrentSong,
    setCurrentIndex,
    currentPlaylist,
    progress,
    setProgress,
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
    setCurrentSong(nextSong);
    setCurrentIndex(nextIndex);
  };

  const handlePreviousSong = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = currentPlaylist.length - 1;
    }
    const prevSong = currentPlaylist[prevIndex];
    setCurrentSong(prevSong);
    setCurrentIndex(prevIndex);
  };

  const handleNextSong = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= currentPlaylist.length) {
      nextIndex = 0;
    }
    const nextSong = currentPlaylist[nextIndex];
    setCurrentSong(nextSong);
    setCurrentIndex(nextIndex);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    if (!duration) return;

    const percent = (current / duration) * 100; // 0 -> 100%
    setProgress(percent);
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
      <audio
        ref={audioRef}
        onEnded={handleSongEnd}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <input type="range" min="0" max="100" value={progress} readOnly />
      <div className={styles.buttonContainer}>
        <button aria-label="Previous song" onClick={handlePreviousSong}>
          <SkipBackIcon size={24} weight="fill" />
        </button>
        <button aria-label="Play song" onClick={() => setIsPlaying(true)}>
          <PlayIcon size={24} />
        </button>
        <button aria-label="Pause song" onClick={() => setIsPlaying(false)}>
          <PauseIcon size={24} />
        </button>
        <button aria-label="Next song" onClick={handleNextSong}>
          <SkipForwardIcon size={24} weight="fill" />
        </button>
      </div>
      {/* add music length bar */}
    </div>
  );
};

export default Player;
