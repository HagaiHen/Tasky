import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DropDownMenu(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '200px' , borderColor: 'white', borderWidth: '3px', borderStyle: 'solid', borderRadius: '10px' }}>
      <FormControl fullWidth variant="standard" >
        <InputLabel id="demo-simple-select-label" sx={{marginLeft: '10px', color: 'white'}}>{props.selected}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Assignee"
          onChange={handleChange}
          sx={{color: 'white', theme: 'light'}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}