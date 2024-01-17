import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { musics } from "../../musics";
import { useRef, useState } from "react";
import "./styles.css";

function Home() {
  const audioRef = useRef();
  const [playPauseBtn, setPlayPauseBtn] = useState("play");
  const [musicsData, setMusicsData] = useState([...musics]);
  const [music, setMusic] = useState({
    id: 0,
    title: "",
    artist: "",
  });

  function handleSetMusic(music) {
    audioRef.current.src = music.url;
    setMusic({
      id: music.id,
      title: music.title,
      artist: music.artist,
    });
    audioRef.current.play();
    setPlayPauseBtn("pause");
  }

  function handleChangeToNextMusic() {
    let id = 0;

    if (music.id === 0) {
      return;
    }

    if (music.id === 4) {
      id = 1;
    } else {
      id = music.id + 1;
    }

    const nextMusic = musicsData.find((newMusic) => {
      return newMusic.id === id;
    });
    handleSetMusic(nextMusic);
  }

  function handleChangeToPreviousMusic() {
    let id = 0;

    if (music.id === 0) {
      return;
    }

    if (music.id === 1) {
      id = 4;
    } else {
      id = music.id - 1;
    }

    const nextMusic = musicsData.find((newMusic) => {
      return newMusic.id === id;
    });
    handleSetMusic(nextMusic);
  }

  return (
    <div className="container">
      <Header />
      <Main
        handleSetMusic={handleSetMusic}
        musicsData={musicsData}
        setMusicsData={setMusicsData}
        setMusic={setMusic}
        audioRef={audioRef}
      />
      <Footer
        handleChangeToPreviousMusic={handleChangeToPreviousMusic}
        setPlayPauseBtn={setPlayPauseBtn}
        playPauseBtn={playPauseBtn}
        handleChangeToNextMusic={handleChangeToNextMusic}
        audioRef={audioRef}
        music={music}
      />
      <audio ref={audioRef} />
    </div>
  );
}

export default Home;
