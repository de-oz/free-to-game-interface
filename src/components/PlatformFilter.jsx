import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PlatformFilter() {
  const [platform, setPlatform] = React.useState('all');

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  const platformMap = {
    all: 'All Platforms',
    pc: 'Windows (PC)',
    browser: 'Browser (Web)',
  };

  return (
    <>
      <FormControl
        sx={{ width: 200 }}
        size="small"
        margin="normal">
        <InputLabel id="platform-filter">Platform</InputLabel>
        <Select
          MenuProps={{ MenuListProps: { disablePadding: true } }}
          labelId="platform-filter"
          label="Platform"
          value={platform}
          onChange={handleChange}>
          {Object.entries(platformMap).map(([platform, text]) => (
            <MenuItem
              key={text}
              divider
              dense
              value={platform}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
