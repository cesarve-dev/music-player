import { useContext } from "react";
import PlayerContext from "../context/PlayerContext";
import SongCard from "../features/Player/SongCard";

const Playlist = () => {
  const { favorites, removeFavoriteSong } = useContext(PlayerContext);

  return (
    <div>
      <h2>Favorite Playlist</h2>
      {favorites.length === 0 ? (
        <p>Use the + button to add songs to your favorites</p>
      ) : (
        favorites.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            showFavoriteButton={false}
            showRemoveButton={true}
            playlist={favorites}
          />
        ))
      )}
    </div>
  );
};

export default Playlist;
