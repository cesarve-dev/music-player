import { useContext } from "react";
import PlayerContext from "../context/PlayerContext";
import SongCard from "../features/Player/SongCard";

const Playlist = () => {
  const { favorites, removeFavoriteSong } = useContext(PlayerContext);
  const favoriteSongs = favorites;

  console.log("rendering playlist");
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
            playlist={favorites}
          />
        ))
      )}
    </div>
  );
};

export default Playlist;
