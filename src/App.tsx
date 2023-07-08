import "./App.css";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { UiProvider } from "./providers";

import { RoutesWithNotFound } from "@/helpers";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { AuthGuard } from "@/guards";
import store from "@/redux/store";

const Login = lazy(() => import("@/pages/SignIn/SignIn"));
const Register = lazy(() => import("@/pages/Register/Register"));
const Private = lazy(() => import("@/pages/private/Private"));

function App() {
  return (
    // TODO: create a loading component
    <Suspense fallback={<>cargando...</>}>
      <Provider store={store}>
        <BrowserRouter>
          <UiProvider>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </UiProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
