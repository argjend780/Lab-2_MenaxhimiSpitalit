// src/components/SidebarMenu.jsx
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Home, Calendar, ShoppingCart, Users, Activity, MapPin } from 'lucide-react';
import './SlidebarMenu.css'; // importo css-in


const SidebarMenu = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#0e1726', // ngjyrë dark mode
          color: '#ffffff',
          borderRight: '1px solid #2c2c2e',
        },
      }}
      defaultCollapsed={false}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            color: active ? '#22d3ee' : '#cbd5e1', // active cyan, text light
            backgroundColor: active ? '#1e293b' : 'transparent',
            fontWeight: active ? '600' : '400',
            '&:hover': {
              backgroundColor: '#1e293b',
              color: '#22d3ee',
              transition: 'all 0.3s ease',
            },
          }),
        }}
      >
        <MenuItem component={<Link component={Link} to="/" />} icon={<Home size={18} />}>
          Dashboard
        </MenuItem>

        <SubMenu label="Pacientët" icon={<Users size={18} />}>
          <MenuItem component={<Link to="/pacientet" />}> Listo Pacientët </MenuItem>
          <MenuItem component={<Link to="/pacientet-create" />}> Krijo Pacient </MenuItem>
        </SubMenu>

        <SubMenu label="Mjekët" icon={<Activity size={18} />}>
          <MenuItem component={<Link to="/mjeket" />}> Listo Mjekët </MenuItem>
          <MenuItem component={<Link to="/mjeket-create" />}> Krijo Mjek </MenuItem>
        </SubMenu>

        <SubMenu label="Qytetet" icon={<MapPin size={18} />}>
          <MenuItem component={<Link to="/qytetetlist" />}> Listo Qytetet </MenuItem>
          <MenuItem component={<Link to="/qytetet-create" />}> Krijo Qytet </MenuItem>
        </SubMenu>

        <MenuItem component={<Link to="/calendar" />} icon={<Calendar size={18} />}>
          Kalendar
        </MenuItem>

        <MenuItem component={<Link to="/e-commerce" />} icon={<ShoppingCart size={18} />}>
          E-commerce
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
