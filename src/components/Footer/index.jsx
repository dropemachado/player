import "./styles.css";
import stop from "../../assets/stop.svg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import previous from "../../assets/previous.svg";
import next from "../../assets/next.svg";

function Footer({
  audioRef,
  music,
  handleChangeToNextMusic,
  playPauseBtn,
  setPlayPauseBtn,
  handleChangeToPreviousMusic,
}) {
  function handlePlayMusic() {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlayPauseBtn("pause");
      return;
    }
    audioRef.current.pause();
    setPlayPauseBtn("play");
  }

  function handleStopMusic() {
    audioRef.current.pause();
    setPlayPauseBtn("play");
    audioRef.current.currentTime = 0;
  }

  return (
    <div className="footer__container">
      <div className="footer__title">
        <h4>{music.title}</h4>
        <span>{music.artist}</span>
      </div>
      <div className="footer__buttons">
        <img
          onClick={() => handleStopMusic()}
          className="button__image"
          src={stop}
          alt="botão de stop"
        />
        <img
          onClick={() => handleChangeToPreviousMusic()}
          className="button__image"
          src={previous}
          alt="botão de voltar"
        />
        <img
          onClick={() => handlePlayMusic()}
          className="button__image"
          src={playPauseBtn === "play" ? play : pause}
          alt="botao de pause"
        />
        <img
          onClick={() => handleChangeToNextMusic()}
          className="button__image"
          src={next}
          alt="botão de next"
        />
      </div>
    </div>
  );
}

export default Footer;
