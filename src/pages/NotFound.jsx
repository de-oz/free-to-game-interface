import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from '@mui/material/Typography';

const NotFound = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column">
      <ErrorOutlineIcon
        sx={{ my: 5 }}
        fontSize="large"
        color="error"
      />

      <Typography
        variant="h3"
        component="h1">
        Page Not Found
      </Typography>

      <Typography
        paragraph
        my={3}>
        Return to the main page.
      </Typography>

      <Button
        variant="contained"
        color="info"
        size="large"
        component={Link}
        to="/">
        Go To Main
      </Button>
    </Box>
  );
};

export default NotFound;
