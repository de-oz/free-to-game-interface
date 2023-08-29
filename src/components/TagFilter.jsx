import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TagFilter() {
  const [tag, setTag] = React.useState('all');

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const tagMap = {
    all: 'All genres',
    mmorpg: 'MMORPG',
    shooter: 'Shooter',
    strategy: 'Strategy',
    moba: 'MOBA',
    racing: 'Racing',
    sports: 'Sports',
    social: 'Social',
    sandbox: 'Sandbox',
    'open-world': 'Open World',
    survival: 'Survival',
    pvp: 'PvP',
    pve: 'PvE',
    pixel: 'Pixel',
    voxel: 'Voxel',
    zombie: 'Zombie',
    'turn-based': 'Turn-Based',
    'first-person': 'First Person View',
    'third-person': 'Third Person View',
    'top-down': 'Top-Down View',
    tank: 'Tank',
    space: 'Space',
    sailing: 'Sailing',
    'side-scroller': 'Side Scroller',
    superhero: 'Superhero',
    permadeath: 'Permadeath',
    card: 'Card Games',
    'battle-royale': 'Battle Royale',
    mmo: 'MMO',
    mmofps: 'MMOFPS',
    mmotps: 'MMOTPS',
    '3d': '3D',
    '2d': '2D',
    anime: 'Anime',
    fantasy: 'Fantasy',
    'sci-fi': 'Sci-Fi',
    fighting: 'Fighting',
    'action-rpg': 'Action RPG',
    action: 'Action',
    military: 'Military',
    'martial-arts': 'Martial Arts',
    flight: 'Flight',
    'low-spec': 'Low-spec',
    'tower-defense': 'Tower Defense',
    horror: 'Horror',
    mmorts: 'MMORTS',
  };

  return (
    <>
      <FormControl
        sx={{ width: 200 }}
        size="small"
        margin="normal">
        <InputLabel id="tag-filter">Genre/Tag</InputLabel>
        <Select
          MenuProps={{
            slotProps: { paper: { sx: { width: 200, maxHeight: 200 } } },
            MenuListProps: { disablePadding: true },
          }}
          labelId="tag-filter"
          label="Genre/Tag"
          value={tag}
          onChange={handleChange}>
          {Object.entries(tagMap).map(([tag, text]) => (
            <MenuItem
              key={text}
              divider
              dense
              value={tag}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
