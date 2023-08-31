import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ mx: 'auto' }}>
        <Avatar
          src="/src/assets/freetogame-logo.png"
          variant="rounded"
          sx={{ mr: 2 }}
          alt="FreeToGame Logo"
        />
        <Typography
          variant="h6"
          component="div">
          FreeToGame Interface
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
