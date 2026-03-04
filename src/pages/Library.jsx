import SongCard from "../features/Player/SongCard";
// import songList from "../assets/songList.json";

const Library = ({ songList }) => {
  return (
    <>
      <h1>Library Songs</h1>
      {songList.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
};

export default Library;
