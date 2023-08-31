import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingSpinner() {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center', mt: 30 }}>
      <CircularProgress
        color="warning"
        size={80}
        thickness={4}
        disableShrink
      />
    </Box>
  );
}
