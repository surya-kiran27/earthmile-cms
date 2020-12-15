import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";
import AppRoute from "./components/AppRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider, EarthMilesProvider } from "./Context/context";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <EarthMilesProvider>
        <Router>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
              />
            ))}
          </Switch>
        </Router>
      </EarthMilesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
