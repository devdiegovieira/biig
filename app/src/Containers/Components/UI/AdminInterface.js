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
import { Avatar, Hidden, Icon, Typography } from '@mui/material';
import logo from './../../../images/biigLogo.png';
import AdminMenu from './AdminMenu';
import AccountMenu from './UserMenu';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: 'rgba(255,255,255,0.9)',
  position: 'fixed',
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const MiniDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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
        [theme.breakpoints.down('sm')]: {
          width: 0
        }
      }),
    },
  }),
);

export default function AdminInterface(props) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (toggle = undefined) => {
    setOpen(toggle != undefined ? toggle : !open);
  };

  const [userMenu, setUserMenu] = React.useState(null);
  const [pageTitle, setPageTitle] = React.useState('');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ boxShadow: 0 }}
        open={open}
      >
        <Toolbar style={{ paddingLeft: 20, paddingRight: 10 }} variant="dense">
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={() => toggleDrawer()}
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
          <IconButton
            style={{ marginLeft: 10 }}
            onClick={e => setUserMenu({ ...e })}
          >
            <Avatar
              alt={JSON.parse(localStorage.getItem('user')).name}
              src={JSON.parse(localStorage.getItem('user')).picture}
              sx={{ width: 40, height: 40 }}
            />
          </IconButton>
          <AccountMenu event={userMenu} />
        </Toolbar>
      </AppBar>

      <Hidden smDown>
        <MiniDrawer
          variant="permanent"
          PaperProps={{ style: { border: 'none' } }}
          style={{ marginTop: 49, background: 'rgba(255,255,255,0.9)' }}
          open={open}
        >
          <AdminMenu open={open} setSelected={setPageTitle} toggleDrawer={toggleDrawer} />
        </MiniDrawer>
      </Hidden>

      <Hidden smUp>
        <MuiDrawer
          variant='temporary'
          open={open}
          onClose={() => { setOpen(false) }}
        >

          <Toolbar style={{ paddingLeft: 20, paddingRight: 10, width: drawerWidth + 50 }} variant="dense">
            <IconButton
              edge="start"
              aria-label="close drawer"
              onClick={() => toggleDrawer()}
            >
              <Icon>close</Icon>
            </IconButton>
          </Toolbar>
          <AdminMenu open={open} setSelected={setPageTitle} toggleDrawer={toggleDrawer} />
        </MuiDrawer>
      </Hidden>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? '#F9F9F9'
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar variant="dense" />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}