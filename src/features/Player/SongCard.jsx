import { useContext } from "react";
import PlayerContext from "./PlayerContext";
import styles from "./SongCard.module.css";

const SongCard = ({ song }) => {
  const { setCurrentSong, setIsPlaying } = useContext(PlayerContext);

  if (!song) {
    return <div className={styles.songCardContainer}>Loading...</div>;
  }

  const handlePlay = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className={styles.songCardContainer}>
      <p>{song.title}</p>
      <p>{song.artist}</p>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default SongCard;
