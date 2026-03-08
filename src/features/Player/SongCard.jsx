import { useContext } from "react";
import PlayerContext from "../../context/PlayerContext";
import styles from "./SongCard.module.css";
import { PlusIcon, PlayIcon } from "@phosphor-icons/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SongCard = ({ song, playlist, showFavoriteButton = true }) => {
  const { playSong, addToFavorites } = useContext(PlayerContext);

  if (!song) {
    return <div className={styles.songCardContainer}>Loading...</div>;
  }

  const notify = () => {
    toast("song added to favorite list.", {
      position: "bottom-center",
      className: "foo-bar",
    });
    console.log("toast message");
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
