import React, { useContext } from 'react';
import { LoginContext } from '../App';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const handleClick = (e) => {
    e.preventDefault();
    setLoggedIn(!Login);
  };

  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <div className='textinput'>
            <div className='individualinput'>
              <TextField
                id='outlined-basic'
                label='Username'
                variant='outlined'
              />
            </div>
            <div className='individualinput'>
              <TextField
                id='outlined-basic'
                label='Password'
                variant='outlined'
              />
            </div>
          </div>
        </Box>
      </CardContent>
      <CardActions>
        <Stack spacing={2} direction='row'>
          <Button onClick={handleClick}>Log in</Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
