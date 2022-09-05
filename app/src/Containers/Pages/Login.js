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
import Copyright from './../Components/UI/Copyright';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import SHA256 from 'crypto-js/sha256';
import { CircularProgress } from '@mui/material';

export default function Login() {


  let navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    api.post('auth/login', { ...loginData, password: (SHA256(loginData.password)).toString() })
      .then(ret => {
        localStorage.setItem('user', JSON.stringify(ret))
        navigate('/admin');
        setLoading(false);

      })
      .catch(err => {
        setLoading(false);
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
        <img
          style={{ height: 100, marginBottom: 10 }}
          src={logo}
          alt={'logo'}
        />

        <Typography
          component="h1"
          variant="h5"
        >
          Efetuar o login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={loginData.mail || ''}
            onChange={e => setLoginData({ ...loginData, mail: e.target.value })}
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
            value={loginData.password || ''}
            onChange={e => setLoginData({ ...loginData, password: e.target.value })}
          />

          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onChange={e => setLoginData({ ...loginData, remember: e.target.value })}
              />
            }
            label="Manter logado"
          />
          

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Logar
            {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
          </Button>
        </Box>
      </Box>

      <Copyright />
    </Container>
  );
}
