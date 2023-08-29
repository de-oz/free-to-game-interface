import { Link } from 'react-router-dom';
import { useGameList } from '../hooks/useGameList';

const Main = () => {
  const { games, loading } = useGameList();

  return (
    <ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        games.map(({ id, title, release_date, publisher, genre, thumbnail }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
            <p>
              Publisher: {publisher} | Genre: {genre} | Release date: {release_date}
            </p>
            <img
              src={thumbnail}
              alt={`${title}'s cover`}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default Main;
