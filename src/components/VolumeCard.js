import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function VolumeCard({ value, setVolume }) {
  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Adjust Volume
        </Typography>
      </CardContent>
      <CardActions>
        <div className='slider'>
          <Box sx={{ width: 200 }}>
            <Stack
              spacing={2}
              direction='row'
              sx={{ mb: 1 }}
              alignItems='center'
            >
              <VolumeDown />
              <Slider
                sx={{ color: '#5C946E' }}
                aria-label='Volume'
                value={value}
                onChange={handleChange}
              />
              <VolumeUp />
            </Stack>
          </Box>
        </div>
      </CardActions>
    </Card>
  );
}
