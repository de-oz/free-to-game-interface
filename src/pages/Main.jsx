import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGameList } from '../hooks/useGameList';
import SelectSortBy from '../components/SelectSortBy';
import PlatformFilter from '../components/PlatformFilter';
import TagFilter from '../components/TagFilter';
import RequestError from '../components/RequestError';
import Stack from '@mui/material/Stack';
import GameCard from '../components/GameCard';
import Grid from '@mui/material/Grid';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const Main = () => {
  const { platform, tag, sortBy } = useSelector((state) => state.listOptions);
  const { games, loading, error } = useGameList(platform, tag, sortBy);
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 51;
  const start = (currentPage - 1) * gamesPerPage;
  const end = start + gamesPerPage;
  let currentGames = [];
  let totalPages = 0;

  if (games && games.length) {
    currentGames = games.slice(start, end);
    totalPages = Math.ceil(games.length / gamesPerPage);
  }

  const renderedComponents = currentGames.map((game) => (
    <Grid
      item
      xs={12}
      lg={6}
      xl={4}
      key={game.id}>
      <GameCard {...game} />
    </Grid>
  ));

  useEffect(() => {
    setCurrentPage(1);
  }, [platform, tag]);

  return (
    <>
      <Typography
        variant="button"
        m={{ xs: '0 0 28px 0', sm: '8px 0 48px 0' }}
        fontWeight={700}
        fontSize={28}
        component="h1"
        color="error.dark"
        textAlign="center">
        Discover the best free-to-play games!
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'stretch', sm: 'center' }}
        textAlign="center"
        maxWidth="90%"
        mx="auto"
        spacing={{ xs: 3, sm: 4, md: 10, xl: 20 }}
        mb={{ xs: 3, md: 6 }}>
        <PlatformFilter platform={platform} />
        <TagFilter tag={tag} />
        <SelectSortBy sortBy={sortBy} />
      </Stack>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <RequestError
          error={error}
          isGamePage={false}
        />
      ) : games.length ? (
        <>
          <Grid
            container
            spacing={{ xs: 1, sm: 1.5, md: 2 }}>
            {renderedComponents}
          </Grid>
          {totalPages > 1 && (
            <Pagination
              sx={{ display: 'flex', justifyContent: 'center', my: { xs: 3, sm: 5, md: 10 } }}
              variant="outlined"
              size="large"
              count={totalPages}
              page={currentPage}
              onChange={(e, value) => setCurrentPage(value)}
            />
          )}
        </>
      ) : (
        <p>No matching games found.</p>
      )}
    </>
  );
};

export default Main;
