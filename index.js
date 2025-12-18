import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./styles.css";

import combineReducers from "./src/reducers";
import HomeView from "./src/components/Home";

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HomeView />
  </Provider>,
  document.getElementById("app")
);
