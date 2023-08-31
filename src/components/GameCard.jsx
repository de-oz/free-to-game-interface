import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CategoryIcon from '@mui/icons-material/Category';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function GameCard({ id, title, genre, publisher, release_date, thumbnail }) {
  return (
    <Card sx={{ bgcolor: '#18122B' }}>
      <CardActionArea
        component={RouterLink}
        to={`${id}`}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'flex-start',
          alignItems: { xs: 'flex-start', sm: 'stretch' },
        }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: 1, sm: 0.4}, borderRadius: 1 }}
          image={thumbnail}
          alt={`${title}'s cover`}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography
            component="span"
            fontSize={{xs: 16, sm: 16, md: 24, lg: 16}}
            variant="subtitle2">
            {title}
          </Typography>
          <Typography
            variant="caption"
            fontSize="14px"
            color="text.secondary"
            component="span">
            {publisher}
          </Typography>
          <Box
            display="flex"
            gap={1}
            mt={{ xs: 2, sm: 'auto' }}>
            <Chip
              icon={<CalendarMonthIcon />}
              size="small"
              sx={{ bgcolor: 'crimson' }}
              label={new Date(release_date).toLocaleDateString('ru-RU')}
            />
            <Chip
              icon={<CategoryIcon />}
              size="small"
              color="info"
              label={genre}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
