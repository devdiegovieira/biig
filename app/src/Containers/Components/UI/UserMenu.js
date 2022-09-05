import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';

export default function AccountMenu(props) {
  const { event } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    if (event) setAnchorEl(event.currentTarget);
  }, [event])

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleClick = (e) => {
    switch (e.target.id) {
      case 'logout':
        navigate('/logout')
        break;

      default:
        break;
    }

    setAnchorEl(null);

  }

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClick}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem id='profile'>
        <ListItemIcon>
          <Icon fontSize="small">person</Icon>
        </ListItemIcon>
        Perfil
      </MenuItem>
      <Divider />
      <MenuItem id='config'>
        <ListItemIcon>
          <Icon fontSize="small">settings</Icon>
        </ListItemIcon>
        Configurações
      </MenuItem>
      <MenuItem id='logout'>
        <ListItemIcon>
          <Icon fontSize="small" id='logout'>logout</Icon>
        </ListItemIcon>
        Sair
      </MenuItem>
    </Menu>
  );
}
