import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppStore } from "@/redux/store";
import { PublicRoutes } from "@/routes";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  
  if (userState.id) {
    return <Outlet />;
  }

  return <Navigate replace to={PublicRoutes.LOGIN} />;
};
