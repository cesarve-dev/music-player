import { NavLink } from "react-router";
import Player from "../features/Player/Player";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Library
        </NavLink>
        <NavLink
          to="/playlist"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Playlist
        </NavLink>
      </nav>
      {/* Application title */}
      <Player />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
