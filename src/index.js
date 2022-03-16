import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

import "./index.css";
import App from "./App";

import { Rsidebar, Rpath } from "./Components/Navigation/reducers/reducers";
//import { Rselect } from "./Components/Navigation/reducers/reducerSelect";

const reducers = combineReducers({ Rsidebar, Rpath });
const store = createStore(reducers, applyMiddleware(Thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
