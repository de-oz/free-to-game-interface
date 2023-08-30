import { Link } from 'react-router-dom';
import { useGameList } from '../hooks/useGameList';
import { useSelector } from 'react-redux';
import SelectSortBy from '../components/SelectSortBy';
import PlatformFilter from '../components/PlatformFilter';
import TagFilter from '../components/TagFilter';
import Box from '@mui/material/Box';

const Main = () => {
  const { platform, tag, sortBy } = useSelector((state) => state.listOptions);
  const { games, loading, error } = useGameList(platform, tag, sortBy);

  return (
    <>
      <Box
        display="flex"
        gap={{ xs: 1, sm: 4, md: 8, xl: 20 }}
        width={0.8}
        justifyContent="center"
        textAlign="center"
        mx="auto">
        <PlatformFilter platform={platform} />
        <TagFilter tag={tag} />
        <SelectSortBy sortBy={sortBy} />
      </Box>

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
