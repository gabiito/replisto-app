import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "@/routes";
import { RoutesWithNotFound } from "@/helpers";
const Home = lazy(() => import("./Home/Home"));

function Private() {
  return (
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route index element={<Home />} />
      </RoutesWithNotFound>
  )
}

export default Private;
