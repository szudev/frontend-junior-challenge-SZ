import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { todoStore } from "app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //<React.StrictMode>
  <Provider store={todoStore}>
    <App />
  </Provider>
  //</React.StrictMode>
);
