import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGameList } from '../hooks/useGameList';
import SelectSortBy from '../components/SelectSortBy';
import PlatformFilter from '../components/PlatformFilter';
import TagFilter from '../components/TagFilter';
import Stack from '@mui/material/Stack';

const Main = () => {
  const { platform, tag, sortBy } = useSelector((state) => state.listOptions);
  const { games, loading, error } = useGameList(platform, tag, sortBy);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        textAlign="center"
        spacing={{ xs: 1, sm: 4, md: 8, xl: 20 }}
        my={{ xs: 2, sm: 4, md: 6 }}>
        <PlatformFilter platform={platform} />
        <TagFilter tag={tag} />
        <SelectSortBy sortBy={sortBy} />
      </Stack>

      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Failed to receive data.</p>
        ) : games.length ? (
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
        ) : (
          <p>No matching games found.</p>
        )}
      </ul>
    </>
  );
};

export default Main;
