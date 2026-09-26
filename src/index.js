import React from "react";
import ReactDOM from "react-dom/client";

import App from "./banksite/App";

import "./bank/index2.css";
import "./banksite/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
