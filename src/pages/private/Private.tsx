import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "@/routes";
import { RoutesWithNotFound } from "@/helpers";
import { RootLayout } from "@/layouts";

const Home = lazy(() => import("./Home/Home"));

function Private() {
  return (
    <RootLayout>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route index element={<Home />} />
      </RoutesWithNotFound>
    </RootLayout>
  )
}

export default Private;
