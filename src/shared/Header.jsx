import { NavLink } from "react-router";

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/playlist">Playlist</NavLink>
      </nav>
    </>
  );
};

export default Header;
