import SongCard from "../features/Player/SongCard";

const Home = () => {
  return (
    <div>
      <h2>Listen to this song</h2>
      <SongCard
        song={{
          title: "I Miss You",
          artist: "Blink 182",
          url: "src/assets/songs/blink-182 - I Miss You (Official Video).mp3",
        }}
      />
    </div>
  );
};

export default Home;
