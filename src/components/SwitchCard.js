import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchCard({ online, setOnline }) {
  const handleChange = () => {
    setOnline(!online);
  };

  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Go Online?
        </Typography>
      </CardContent>
      <CardActions>
        <div className='switch'>
          <Switch {...label} checked={online} onChange={handleChange} />
        </div>
      </CardActions>
    </Card>
  );
}
