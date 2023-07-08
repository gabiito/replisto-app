import { Logo } from "@/components/Logo";
import { UserMenu } from ".";
import { UserInfo } from "@/models";

interface NavbarProps {
  user: UserInfo | null;
}
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <Logo withTitle />
        <UserMenu user={user} />
      </div>
    </nav>
  );
};

export default Navbar;
