import { useDispatch } from 'react-redux';
import { updateSortBy } from '../app/listSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSortBy({ sortBy }) {
  const dispatch = useDispatch();

  const sortMap = {
    relevance: 'Relevance',
    popularity: 'Popularity',
    'release-date': 'Release Date',
    alphabetical: 'Alphabetical',
  };

  return (
    <>
      <FormControl
        sx={{ width: 200 }}
        size="small"
        margin="normal">
        <InputLabel id="sort-by">Sort By</InputLabel>
        <Select
          MenuProps={{ MenuListProps: { disablePadding: true } }}
          labelId="sort-by"
          label="Sort By"
          value={sortBy}
          onChange={(e) => dispatch(updateSortBy(e.target.value))}>
          {Object.entries(sortMap).map(([attribute, text]) => (
            <MenuItem
              key={text}
              divider
              dense
              value={attribute}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
