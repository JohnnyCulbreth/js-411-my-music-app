import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import musicapp from './musicapp.png';

function ResponsiveAppBar() {
  return (
    <AppBar position='static' style={{ background: '#5C946E' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <img src={musicapp} style={{ width: 150, height: 55, margin: 5 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
