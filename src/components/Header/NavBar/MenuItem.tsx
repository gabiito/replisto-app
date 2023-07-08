import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface MenuItemProps {
  label: string;
  to: string;
  icon?: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to, icon: Icon }) => {

  return (
    <Link to={to} className="flex items-center gap-3">
      {Icon && <Icon size={16} />}
      {label}
    </Link>
  );
};

export default MenuItem;
