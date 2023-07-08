import { UserInfo } from "@/models";
import { Avatar, MenuItem } from ".";
import { TbChevronDown, TbHeart, TbNotebook, TbUser, TbUsersGroup, TbCalendarEvent, TbLogout, TbSettings } from "react-icons/tb";

interface UserMenuProps {
  user?: UserInfo | null;
}

import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { PrivateRoutes } from "@/routes";

const items: MenuProps['items'] = [
  {
    label: <span className="text-zinc-700 px-4">Hola, <b>Gabriel Zerbino</b>!</span>,
    type: 'group'
  },
  {
    label: <MenuItem label="Mi perfil" to={PrivateRoutes.PROFILE} icon={TbUser} />,
    key: '0',
  },
  {
    label: <MenuItem label="Mis recetas" to={PrivateRoutes.RECIPES} icon={TbNotebook} />,
    key: '1',
  },
  {
    label: <MenuItem label="Recetas favoritas" to={PrivateRoutes.FAVORITES} icon={TbHeart} />,
    key: '2',
  },
  {
    label: <MenuItem label="Mis grupos" to={PrivateRoutes.GROUPS} icon={TbUsersGroup} />,
    key: '3',
  },
  {
    label: <MenuItem label="Ver planes" to={PrivateRoutes.MEALPLANS} icon={TbCalendarEvent} />,
    key: '4',
  },
  {
    type: 'divider',
  },
  {
    label: <MenuItem label="Configuración" to={PrivateRoutes.SETTINGS} icon={TbSettings} />,
    key: '5',
  },
  {
    type: 'divider',
  },
  {
    label: <MenuItem label="Salir" to={PrivateRoutes.LOGOUT} icon={TbLogout} />,
    key: '6',
  },
];

const UserMenu: React.FC<UserMenuProps> = ({user}) => {
  return (
    <Dropdown  menu={{ items }} trigger={['click']} className="cursor-pointer hover:bg-white hover:shadow-sm rounded-full p-2 transition-all duration-300">
    <a onClick={(e) => e.preventDefault()}>
      <div className="flex items-center gap-5">
        <Avatar src={user?.image} alt={user?.name}/>
        <TbChevronDown size={24} className="text-slate-500"/>
      </div>
    </a>
  </Dropdown>
  );
}

export default UserMenu;