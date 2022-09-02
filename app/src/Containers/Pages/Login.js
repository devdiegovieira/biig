import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './../../images/biigLogo.png';
import Copyright from './../../Components/UI/Copyright';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

export default function Login() {
  let navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('auth/login', loginData).then(ret => {
      localStorage.setItem('auth', ret.data)
      navigate('/admin');
  
    }).catch(err => {
      console.log(err)
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img style={{ height: 100, marginBottom: 10 }} src={logo} alt={'logo'} />
        <Typography component="h1" variant="h5">
          Efetuar o login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setLoginData({...loginData, mail: e.target.value})}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setLoginData({...loginData, password: e.target.value})}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Manter logado"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Logar
          </Button>

        </Box>
      </Box>

      <Copyright />
    </Container>
  );
}
