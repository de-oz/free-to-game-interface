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
    <Card>
      <CardActionArea
        component={RouterLink}
        to={`${id}`}
        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch' }}>
        <CardMedia
          component="img"
          sx={{ width: 200, m: '12px 0 12px 12px', borderRadius: 1 }}
          image={thumbnail}
          alt={`${title}'s cover`}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}>
          <Typography
            component="span"
            variant="body1">
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="span">
            {publisher}
          </Typography>
          <Box
            display="flex"
            gap={1}
            mt="auto">
            <Chip
              icon={<CategoryIcon />}
              size="small"
              color="info"
              label={genre}
            />
            <Chip
              icon={<CalendarMonthIcon />}
              size="small"
              color="warning"
              label={(new Date(release_date)).toLocaleDateString('ru-RU')}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
