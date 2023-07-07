import "./App.css";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { UiProvider } from "./providers";

import store from "@/redux/store";

function App() {
  return (
    <Suspense fallback={<>cargando...</>}> //TODO: add loading component
      <Provider store={store}>
        <BrowserRouter>
          <UiProvider>
          </UiProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
