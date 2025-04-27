// src/components/SidebarMenu.jsx
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './SlidebarMenu.css'; // importo css-in

const SidebarMenu = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'var(--sidebar-bg)', // perdor variabla CSS
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            color: active ? 'var(--active-color)' : 'var(--text-color)',
            backgroundColor: active ? 'var(--active-bg)' : 'transparent',
            '&:hover': {
              backgroundColor: 'var(--hover-bg)',
              color: 'var(--hover-color)',
            },
          }),
        }}
      >
        <SubMenu label="Charts">
          <MenuItem>Pie charts</MenuItem>
          <MenuItem>Line charts</MenuItem>
        </SubMenu>
        <SubMenu label="Pacinetet">
          <MenuItem>Listo Pacinetet</MenuItem>
          <MenuItem>Krijo Pacinetet</MenuItem>
        </SubMenu>
        <SubMenu label="Mjeket">
          <MenuItem>Listo Mjeket</MenuItem>
          <MenuItem>Krijo Mjeket</MenuItem>
        </SubMenu>
        <SubMenu label="Qytetet">
        <MenuItem component={<Link to="/qytetetlist" />}>Listo Qytetet</MenuItem>
          <MenuItem>Krijo Qytetet</MenuItem>
        </SubMenu>
        <MenuItem component={<Link to="/documentation" />}>Documentation</MenuItem>
        <MenuItem component={<Link to="/calendar" />}>Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}>E-commerce</MenuItem>
        <MenuItem component={<Link to="/qytetetlist" />}>Qytetet</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
