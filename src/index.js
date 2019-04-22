import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FavouriteRecipes from "./Components/FavouriteRecipes";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/fav" component={FavouriteRecipes} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
