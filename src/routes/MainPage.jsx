import { useGameList } from '../hooks/useGameList';

const MainPage = () => {
  const { games, loading } = useGameList();

  return (
    <ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        games.map(({ id, title, release_date, publisher, genre, thumbnail }) => (
          <li key={id}>
            {title} - {genre} - {release_date}
          </li>
        ))
      )}
    </ul>
  );
};

export default MainPage;
