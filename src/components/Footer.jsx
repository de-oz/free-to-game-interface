import { Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Paper
      component="footer"
      square
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 'auto', p: 2 }}>
      <Link
        href="https://github.com/de-oz"
        target="_blank"
        rel="noreferrer">
        <IconButton color="error">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Link>
      <Typography
        variant="body2"
        component="span">
        Copyright © 2023 de-oz
      </Typography>
    </Paper>
  );
}
