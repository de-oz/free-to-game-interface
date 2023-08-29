import GameError from '../components/GameError';
import { Link } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { gameId } = useParams();
  const {
    game: {
      title,
      release_date,
      publisher,
      developer,
      genre,
      thumbnail,
      screenshots,
      minimum_system_requirements: requirements,
    },
    loading,
    error,
  } = useGame(gameId);

  return (
    <>
      <Link to="/">Back to Main</Link>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <GameError error={error} />
      ) : (
        <ul>
          <li>Title: {title}</li>
          <li>Publisher: {publisher}</li>
          <li>Developer: {developer}</li>
          <li>Genre: {genre}</li>
          <li>Release date: {release_date}</li>
          <li>
            Screenshots:
            <ul>
              {screenshots.map((screenshot) => (
                <li key={screenshot.id}>{screenshot.image}</li>
              ))}
            </ul>
          </li>
          <li>Thumbnail: {thumbnail}</li>
          <li>
            System requirements:
            <ul>
              <li>Hey</li>
              <li>OS: {requirements.os}</li>
              <li>Processor: {requirements.processor}</li>
              <li>Memory: {requirements.memory}</li>
              <li>Graphics: {requirements.graphics}</li>
              <li>Storage: {requirements.storage}</li>
            </ul>
          </li>
        </ul>
      )}
    </>
  );
};

export default Game;
