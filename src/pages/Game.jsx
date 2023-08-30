import { Link, useParams } from 'react-router-dom';
import { useGameDetails } from '../hooks/useGameDetails';
import GameError from '../components/GameError';

const Game = () => {
  const { gameId } = useParams();
  const { game, loading, error } = useGameDetails(gameId);

  return (
    <>
      <Link to="/">Back to Main</Link>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <GameError error={error} />
      ) : (
        <ul>
          <li>Title: {game.title}</li>
          <li>Publisher: {game.publisher}</li>
          <li>Developer: {game.developer}</li>
          <li>Genre: {game.genre}</li>
          <li>Release date: {game.release_date}</li>

          {Boolean(game.screenshots.length) && (
            <li>
              Screenshots:
              <ul>
                {game.screenshots.map((screenshot) => (
                  <li key={screenshot.id}>{screenshot.image}</li>
                ))}
              </ul>
            </li>
          )}

          <li>Thumbnail: {game.thumbnail}</li>

          {game.platform.includes('Windows') && game.minimum_system_requirements.os && (
            <li>
              Minimum System Requirements (Windows)
              <ul>
                <li>OS: {game.minimum_system_requirements.os || '?'}</li>
                <li>Processor: {game.minimum_system_requirements.processor || '?'}</li>
                <li>Memory: {game.minimum_system_requirements.memory || '?'}</li>
                <li>Graphics: {game.minimum_system_requirements.graphics || '?'}</li>
                <li>Storage: {game.minimum_system_requirements.storage || '?'}</li>
              </ul>
            </li>
          )}

          {game.platform.includes('Browser') && (
            <li>
              Minimum System Requirements (Browser)
              <p>
                {game.title} is a browser based game and should run smoothly on practically any PC with an updated
                web-browser.
              </p>
              <p>
                If you have old hardware or software, you may still be able to play {game.title}, but your game
                experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox,
                Chrome, or Internet Explorer.
              </p>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Game;
