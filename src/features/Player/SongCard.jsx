import { useContext } from "react";
import PlayerContext from "../../context/PlayerContext";
import styles from "./SongCard.module.css";
import { PlusIcon, PlayIcon, TrashIcon } from "@phosphor-icons/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SongCard = ({
  song,
  playlist,
  showFavoriteButton = true,
  showRemoveButton = false,
}) => {
  const { playSong, addToFavorites, removeFavoriteSong } =
    useContext(PlayerContext);

  if (!song) {
    return <div className={styles.songCardContainer}>Loading...</div>;
  }

  const notify = () => {
    toast("song added to favorite list.", {
      position: "bottom-center",
      className: "foo-bar",
    });
  };

  return (
    <div className={styles.songCardContainer}>
      <div className={styles.songDataContainer}>
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button aria-label="Play song" onClick={() => playSong(song, playlist)}>
          <PlayIcon size={16} />
        </button>
        {showRemoveButton && (
          <button
            aria-label="remove song"
            onClick={() => removeFavoriteSong(song.id)}
          >
            <TrashIcon size={16} />
          </button>
        )}

        {showFavoriteButton && (
          <button
            aria-label="add song to favorites playlist"
            onClick={() => {
              addToFavorites(song);
              notify();
            }}
          >
            <PlusIcon size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SongCard;
