// src/components/SidebarMenu.jsx
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Home, Calendar, ShoppingCart, Users, Activity, MapPin } from 'lucide-react';

const SidebarMenu = () => {
  return (
    <div className="hidden md:block w-64 bg-slate-900 text-white h-screen sticky top-0">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: '#111827', // tailwind: bg-gray-900
            color: '#ffffff',
            borderRight: 'none',
            height: '100%',
            overflowY: 'auto'
          },
          [`.${sidebarClasses.root}`]: {
            height: '100%'
          }
        }}
        defaultCollapsed={false}
      >
        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              color: active ? '#0d9488' : '#cbd5e1', // text-cyan-500 / text-slate-300
              backgroundColor: active ? '#1f2937' : 'transparent',
              fontWeight: active ? '600' : '400',
              '&:hover': {
                backgroundColor: '#1f2937',
                color: '#22d3ee',
                transition: 'all 0.3s ease'
              }
            })
          }}
        >
          <MenuItem component={<Link to="/" />} icon={<Home size={18} />}>
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
    </div>
  );
};

export default SidebarMenu;