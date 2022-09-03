import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Icon, List, Tooltip, Zoom } from '@mui/material';
import { useNavigate } from 'react-router-dom';

let menuItems = [
  {
    title: 'Resumo',
    icon: 'home',
    link: '/admin'
  },
  {
    title: 'Anúncios',
    icon: 'app_registration',
    link: '/admin/publishes'
  },
  {
    title: 'Vendas',
    icon: 'new_releases',
    link: '/admin/orders'
  },
  {
    title: 'Financeiro',
    icon: 'payments',
    link: '/admin/payments'
  },
  {
    title: '-'
  },
  {
    title: 'Sair',
    icon: 'logout',
    link: '/logout'
  },
]


export default function AdminMenu(props) {
  let { open = false, setSelected = () => {} } = props;
  let navigate = useNavigate();

  React.useEffect(() => {
    setSelected(menuItems.find(f => f.link == window.location.pathname).title)
  }, [setSelected])

  return (
    <List component="nav">
      {menuItems.map((m, i) => {
        return m.title == '-' ? <Divider key={i}/> :
          <Tooltip
            TransitionComponent={Zoom}
            placement="right"
            arrow
            title={!open ? m.title : ''}
            key={i}
          >
            <ListItemButton
              selected={window.location.pathname == m.link}
              onClick={() => { navigate(m.link); setSelected(m.title) }}
              key={i}
            >
              <ListItemIcon>
                <Icon
                  color={window.location.pathname == m.link ? 'primary' : 'inherit'}
                >
                  {m.icon}
                </Icon>
              </ListItemIcon>
              <ListItemText primary={m.title} />
            </ListItemButton>
          </Tooltip>

      })}
    </List>
  )
};
