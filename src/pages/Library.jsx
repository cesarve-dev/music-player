import SongCard from "../features/Player/SongCard";
import songList from "../assets/songList.json";

const Library = () => {
  const songs = songList.songList;

  return (
    <>
      <h1>Library Songs</h1>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
};

export default Library;
