import { useContext } from "react";
import PlayerContext from "../../context/PlayerContext";
import styles from "./SongCard.module.css";
import { PlusIcon, PlayIcon } from "@phosphor-icons/react";

const SongCard = ({ song, showFavoriteButton = true }) => {
  const { playSong, addToFavorites } = useContext(PlayerContext);

  if (!song) {
    return <div className={styles.songCardContainer}>Loading...</div>;
  }

  return (
    <div className={styles.songCardContainer}>
      <div className={styles.songDataContainer}>
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </div>
      <div>
        <button onClick={() => playSong(song)}>
          <PlayIcon size={16} />
        </button>
        {showFavoriteButton && (
          <button onClick={() => addToFavorites(song)}>
            <PlusIcon size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SongCard;
