import { SocialLink } from "@/types";
import { Button } from "antd";

interface FooterProps {
  disclaimer: React.ReactElement;
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ disclaimer, socialLinks }) => {
  return (
    <footer className="flex-none">
      <div className="flex flex-col items-center justify-center w-full gap-6 py-4">
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map(({url, name, icon: Icon}) => (
            <Button 
              key={name}
              type="link"
              onClick={() => window.open(url, "_blank")}
              className="text-slate-400"
            >
              <Icon size={24}/>
              
            </Button>
          ))}
        </div>
        <span className="text-xs text-gray-500">{disclaimer}</span>
      </div>
    </footer>
  );
}

export default Footer;
