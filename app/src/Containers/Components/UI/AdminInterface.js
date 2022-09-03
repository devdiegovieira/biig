import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Typography } from '@mui/material';
import logo from './../../../images/biigLogo.png';
import AdminMenu from './AdminMenu';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),

      }),
    },
  }),
);

export default function AdminInterface(props) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [pageTitle, setPageTitle] = React.useState('');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        style={{ background: 'rgba(255,255,255,0.9)', position: 'fixed', zIndex: 1400 }} 
        sx={{ boxShadow: 'none' }} 
        
        open={open}
      >
        <Toolbar style={{ paddingLeft: 20, paddingRight: 10 }}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img style={{ height: 35, marginLeft: 10, marginRight: 20 }} src={logo} alt={'logo'} />
          <Typography
            component="h1"
            variant="h6"
            color="GrayText"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {pageTitle}
          </Typography>
          <IconButton >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton style={{ marginLeft: 10 }}>
            <Avatar
              alt="Remy Sharp"
              src={JSON.parse(localStorage.getItem('user')).picture}
              sx={{ width: 40, height: 40 }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent" 
        PaperProps={{style: {border: 'none'}}}
        style={{marginTop: 56, background: 'rgba(255,255,255,0.9)'}}
        open={open}
      >
        <AdminMenu open={open} setSelected={setPageTitle} />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}