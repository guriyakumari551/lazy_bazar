import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./StateProvider";
// import * as ServiceWorker from "./ServiceWorker";
import reducer, { initialState } from "./reducer.js";

ReactDOM.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </>,

  document.getElementById("root")
);
