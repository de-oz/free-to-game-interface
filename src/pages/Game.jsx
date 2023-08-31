import { Link, useParams } from 'react-router-dom';
import { useGameDetails } from '../hooks/useGameDetails';
import GameError from '../components/GameError';
import LoadingSpinner from '../components/LoadingSpinner';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
      <Container
        maxWidth="lg"
        sx={{ mb: 20 }}>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <GameError error={error} />
        ) : (
          <>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={4}>
              <Typography
                variant="h4"
                component="h1">
                {game.title}
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                size="large"
                component={Link}
                to="/">
                Back To Main
              </Button>
            </Box>

            <Box
              display="flex"
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
                  fontSize="16px"
                  mb={1}
                  variant="overline"
                  component="h2">
                  Game Details
                </Typography>
                <Grid
                  container
                  justifyContent={'center'}
                  spacing={4}>
                  {Object.entries(detailMap).map(([property, text]) => (
                    <Grid
                      item
                      textAlign="center"
                      xs={4}
                      key={property}>
                      <Typography
                        variant="button"
                        color="error.light">
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
                  fontSize="16px"
                  variant="overline"
                  component="h2">
                  {game.title} Screenshots
                </Typography>

                <Divider sx={{ m: '4px 0 16px 0' }} />

                <ImageList
                  sx={{ height: 210 }}
                  gap={8}
                  cols={3}
                  rowHeight={200}>
                  {game.screenshots.map((screenshot) => (
                    <ImageListItem key={screenshot.id}>
                      <img
                        src={screenshot.image}
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
                  fontSize="16px"
                  variant="overline"
                  component="h2">
                  Minimum System Requirements (PC)
                </Typography>

                <Divider sx={{ m: '4px 0 16px 0' }} />

                <Grid
                  container
                  justifyContent="center"
                  spacing={4}>
                  {Object.entries(game.minimum_system_requirements).map(([requirement, value]) => (
                    <Grid
                      item
                      textAlign="center"
                      xs={4}
                      key={requirement}>
                      <Typography
                        variant="button"
                        color="error.light">
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
                  fontSize="16px"
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
          </>
        )}
      </Container>
    </>
  );
};

export default Game;
