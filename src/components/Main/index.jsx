import "./styles.css";
import Card from "../Card";

function Main({ audioRef, setMusic, setMusicsData, musicsData, handleSetMusic }) {
  

  return (
    <div className="main__container">
      <div className="main__content">
        <div className="main__content-title">
          <h3 className="content__title">The best Playlist</h3>
        </div>
        <div className="main__cards">
          {musicsData.map((music) => {
            return (
              <div key={music.id} onClick={() => handleSetMusic(music)}>
                <Card
                  title={music.title}
                  description={music.description}
                  cover={music.cover}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
