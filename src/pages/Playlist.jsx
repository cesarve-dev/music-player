import { useContext } from "react";
import PlayerContext from "../context/PlayerContext";
import SongCard from "../features/Player/SongCard";

const Playlist = () => {
  const { favorites, removeFavoriteSong } = useContext(PlayerContext);

  return (
    <div>
      <h2>Favorite Playlist</h2>
      {favorites.map((song) => (
        <SongCard key={song.id} song={song} showFavoriteButton={false} />
      ))}
    </div>
  );
};

export default Playlist;
