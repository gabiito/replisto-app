import { PrivateRoutes } from "@/routes";
import { Link } from "react-router-dom";
import { SiteTitle } from "./styled-compopnents";
import logo from "@/assets/logo.png";

interface LogoProps {
  withTitle?: boolean;
  imgSize?: LogoSize;
}

export enum LogoSize {
  SMALL = "w-5 h-5",
  MEDIUM = "w-10 h-10",
  LARGE = "w-12 h-12",
  XL = "w-16 h-16",
}

function Logo({
  withTitle = false,
  imgSize = LogoSize.MEDIUM,
}: LogoProps) {

  let txtSize = "";

  switch (imgSize) {
    case LogoSize.SMALL:
      txtSize = "text-sm";
      break;
    case LogoSize.MEDIUM:
      txtSize = "text-3xl relative bottom-[1px]";
      break;
    case LogoSize.LARGE:
      txtSize = "text-4xl relative bottom-[2px]";
      break;
    case LogoSize.XL:
      txtSize = "text-5xl relative bottom-[3px]";
      break;
  }

  return (
    <Link className={`${''} flex gap-2 items-center`} to={`/${PrivateRoutes.PRIVATE}`}>
      <img src={logo} alt="logo" className={imgSize} />
      {withTitle && (
        <SiteTitle className={`${txtSize} tracking-wide text-zinc-800`}>Replisto!</SiteTitle>
      )}
    </Link>
  );
}
export default Logo;
