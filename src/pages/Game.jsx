import GameError from '../components/GameError';
import { Link } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { gameId } = useParams();
  const {
    game: {
      title,
      platform,
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

          {Boolean(screenshots.length) && (
            <li>
              Screenshots:
              <ul>
                {screenshots.map((screenshot) => (
                  <li key={screenshot.id}>{screenshot.image}</li>
                ))}
              </ul>
            </li>
          )}

          <li>Thumbnail: {thumbnail}</li>

          {platform.includes('Windows') && requirements.os && (
            <li>
              Minimum System Requirements (Windows)
              <ul>
                <li>OS: {requirements.os || '?'}</li>
                <li>Processor: {requirements.processor || '?'}</li>
                <li>Memory: {requirements.memory || '?'}</li>
                <li>Graphics: {requirements.graphics || '?'}</li>
                <li>Storage: {requirements.storage || '?'}</li>
              </ul>
            </li>
          )}

          {platform.includes('Browser') && (
            <li>
              Minimum System Requirements (Browser)
              <p>
                {title} is a browser based game and should run smoothly on practically any PC with an updated
                web-browser.
              </p>
              <p>
                If you have old hardware or software, you may still be able to play {title}, but your game experience
                may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or
                Internet Explorer.
              </p>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Game;
