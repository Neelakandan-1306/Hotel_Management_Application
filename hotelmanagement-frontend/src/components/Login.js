import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@mui/icons-material';

import Button from '@mui/material/Button';
import { Navigate, Route, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to your Spring Boot backend for authentication
    axios
      .post('http://localhost:8080/api/user/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate('/home');
        } else {
          // Authentication failed
          console.log('Authentication failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        if (error.response && error.response.status === 401) {
          alert('Authentication failed. Please check your username and password and try again.');
        }
      });
  };

  return (
    <div style={{ backgroundColor: '#f1f0e7', paddingRight: '2rem', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={5} style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '400px', width: '410px', fontFamily: 'Montserrat' }}>
        <h2 id='user' style={{ textAlign: 'center', fontSize: '50px' }}>LOGIN</h2>
        <form onSubmit={handleSubmit} style={{ }}>
          <div >
            <FormControl sx={{ m: 1, width: '70%', color: '#454545' ,paddingLeft:'50px'}}>
              <InputLabel htmlFor="outlined-adornment-username" style={{ color: 'black',paddingLeft:'70px' }}>Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                label="Username"
                style={{ color: '#454545' }}
                inputProps={{ style: { color: '#454545' } }}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#454545',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#454545',
                  },
                }}
              />
            </FormControl>
          </div>
          <br />
          <div>
            <FormControl sx={{ m: 1, width: '70%',paddingLeft:'50px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" style={{ color: 'black' ,paddingLeft:'70px'}}>Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{ style: { color: '#454545' } }}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#454545',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#454545',
                  },
                }}
              />
            </FormControl>
          </div>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" type='submit' style={{ color: 'white', backgroundColor: '#805241', width: '50%' }}>Submit</Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
