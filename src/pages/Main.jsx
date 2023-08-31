import { useSelector } from 'react-redux';
import { useGameList } from '../hooks/useGameList';
import SelectSortBy from '../components/SelectSortBy';
import PlatformFilter from '../components/PlatformFilter';
import TagFilter from '../components/TagFilter';
import Stack from '@mui/material/Stack';
import GameCard from '../components/GameCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LoadingSpinner from '../components/LoadingSpinner';

const Main = () => {
  const { platform, tag, sortBy } = useSelector((state) => state.listOptions);
  const { games, loading, error } = useGameList(platform, tag, sortBy);

  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="center"
          textAlign="center"
          maxWidth={'90%'}
          mx="auto"
          spacing={{ xs: 1, sm: 4, md: 8, xl: 20 }}
          my={{ xs: 2, sm: 4, md: 6 }}>
          <PlatformFilter platform={platform} />
          <TagFilter tag={tag} />
          <SelectSortBy sortBy={sortBy} />
        </Stack>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>Failed to receive data.</p>
        ) : games.length ? (
          <Grid
            container
            spacing={2}>
            {games.map((game) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={game.id}>
                <GameCard {...game} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>No matching games found.</p>
        )}
      </Container>
    </>
  );
};

export default Main;
