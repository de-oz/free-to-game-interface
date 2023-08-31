import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from '@mui/material/Typography';

const RequestError = ({ error, isGamePage = true }) => {
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
        variant="h4"
        component="h1">
        {error.message}
      </Typography>

      <Typography
        paragraph
        my={3}>
        Failed to request data. Try again later.
      </Typography>

      {isGamePage && (
        <Button
          variant="contained"
          color="info"
          size="large"
          component={Link}
          to="/">
          Go To Main
        </Button>
      )}
    </Box>
  );
};

export default RequestError;
