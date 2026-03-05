import { useContext } from "react";
import PlayerContext from "../../context/PlayerContext";
import styles from "./SongCard.module.css";

const SongCard = ({ song, showFavoriteButton = true }) => {
  const { playSong, addToFavorites } = useContext(PlayerContext);

  if (!song) {
    return <div className={styles.songCardContainer}>Loading...</div>;
  }

  const handlePlay = () => {
    playSong(song);
  };

  return (
    <div className={styles.songCardContainer}>
      <div className={styles.songDataContainer}>
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </div>
      <div>
        <button onClick={handlePlay}>Play</button>
        {showFavoriteButton && (
          <button onClick={() => addToFavorites(song)}>+</button>
        )}
      </div>
    </div>
  );
};

export default SongCard;
