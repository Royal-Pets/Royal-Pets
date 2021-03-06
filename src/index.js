import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./vars.css";

ReactDOM.render(
  <Auth0Provider
    domain="dev-8ercyl5d.us.auth0.com"
    clientId="8y7HPe6qR7fsYkWj98g2q0uLi7Ipo0fP"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
