import { Link, useParams } from 'react-router-dom';
import { useGameDetails } from '../hooks/useGameDetails';
import RequestError from '../components/RequestError';
import LoadingSpinner from '../components/LoadingSpinner';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';

const Game = () => {
  const { gameId } = useParams();
  const { game, loading, error } = useGameDetails(gameId);

  const detailMap = {
    title: 'Title',
    publisher: 'Publisher',
    developer: 'Developer',
    genre: 'Genre',
    release_date: 'Release Date',
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <RequestError error={error} />
      ) : (
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            mb={{ xs: 2, sm: 5 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              component="h1">
              {game.title}
            </Typography>
            <Button
              sx={{ my: { xs: 2, sm: 0 } }}
              variant="outlined"
              color="info"
              size="large"
              component={Link}
              to="/">
              Back To Main
            </Button>
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-evenly"
            gap={4}>
            <img
              src={game.thumbnail}
              alt={`${game.title}'s cover`}
              style={{ borderRadius: 5 }}
            />
            <Box
              display="flex"
              flexDirection="column">
              <Typography
                textAlign="center"
                fontSize="18px"
                mb={1}
                variant="overline"
                component="h2">
                Game Details
              </Typography>
              <Grid
                container
                justifyContent="center"
                spacing={{ xs: 2, sm: 4 }}>
                {Object.entries(detailMap).map(([property, text]) => (
                  <Grid
                    item
                    textAlign="center"
                    xs={4}
                    key={property}>
                    <Typography
                      variant="button"
                      color="error">
                      {text}
                    </Typography>
                    <Typography>
                      {property === 'release_date'
                        ? new Date(game[property]).toLocaleDateString('ru-RU')
                        : game[property]}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Divider sx={{ m: '32px 0 16px 0' }} />

          <Typography
            variant="h5"
            component="h2"
            mb={1}>
            Description
          </Typography>
          <p style={{ whiteSpace: 'pre-wrap' }}>{`${game.description}`}</p>

          {Boolean(game?.screenshots.length) && (
            <>
              <Typography
                mt={4}
                textAlign="center"
                fontSize="18px"
                variant="overline"
                component="h2">
                {game.title} Screenshots
              </Typography>

              <Divider sx={{ m: '4px 0 16px 0' }} />

              <ImageList
                sx={{ height: 300 }}
                gap={8}>
                {game.screenshots.map((screenshot) => (
                  <ImageListItem key={screenshot.id}>
                    <img
                      src={screenshot.image}
                      alt={`Screenshot from ${game.title}. Failed to load, here is the URL: ${screenshot.image}`}
                      style={{ borderRadius: 5 }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </>
          )}

          {game?.platform.includes('Windows') && game?.minimum_system_requirements.os && (
            <>
              <Typography
                mt={4}
                textAlign="center"
                fontSize="18px"
                variant="overline"
                component="h2">
                Minimum System Requirements (PC)
              </Typography>

              <Divider sx={{ m: '4px 0 16px 0' }} />

              <Grid
                container
                justifyContent="center"
                spacing={{ xs: 2, sm: 4 }}>
                {Object.entries(game.minimum_system_requirements).map(([requirement, value]) => (
                  <Grid
                    item
                    textAlign="center"
                    xs={4}
                    key={requirement}>
                    <Typography
                      variant="button"
                      color="error">
                      {requirement}
                    </Typography>
                    <Typography>{(value.trim() !== '?' && value) || 'Not specified'}</Typography>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {game.platform.includes('Browser') && (
            <>
              <Typography
                mt={4}
                textAlign="center"
                fontSize="18px"
                variant="overline"
                component="h2">
                Minimum System Requirements (Browser)
              </Typography>

              <Divider sx={{ m: '4px 0 16px 0' }} />

              <Typography paragraph>
                {game.title} is a browser based game and should run smoothly on practically any PC with an updated
                web-browser.
              </Typography>
              <Typography paragraph>
                If you have old hardware or software, you may still be able to play {game.title}, but your game
                experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox,
                Chrome, or Internet Explorer.
              </Typography>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default Game;
