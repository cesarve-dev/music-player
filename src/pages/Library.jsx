import { useContext } from "react";
import SongCard from "../features/Player/SongCard";
import styled from "styled-components";
import PlayerContext from "../context/PlayerContext";

const Library = () => {
  const { songList } = useContext(PlayerContext);
  console.log("rendering library");
  return (
    <>
      <h1>Library Songs</h1>
      <Header>
        <p>Title</p>
        <p>Artist</p>
      </Header>
      {songList.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
};

export default Library;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  padding: 1rem 0;
`;
