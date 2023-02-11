import * as React from 'react';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function SoundCard() {
  const [quality, setQuality] = React.useState(2);

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Sound Quality
        </Typography>
      </CardContent>
      <FormControl style={{ width: 150 }}>
        <InputLabel id='demo-simple-select-label'>Select</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={quality}
          label='Quality'
          onChange={handleChange}
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
}
