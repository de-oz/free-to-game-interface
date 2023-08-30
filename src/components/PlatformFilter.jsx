import { useDispatch } from 'react-redux';
import { updatePlatform } from '../app/listSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PlatformFilter({ platform }) {
  const dispatch = useDispatch();

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
          onChange={(e) => dispatch(updatePlatform(e.target.value))}>
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
