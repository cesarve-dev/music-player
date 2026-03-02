import { useState } from "react";
import { useLocation, Route, Routes } from "react-router";
import Header from "./shared/Header";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Home");
    } else if (location.pathname === "/library") {
      setTitle("Library");
    } else if (location.pathname === "/playlist") {
      setTitle("Playlist");
    } else {
      setTitle("Not Found");
    }
  }, [location]);
  return (
    <>
      <Header title={title} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
