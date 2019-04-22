import { SET_RECIPES, FAV_RECIPE, STAR } from "../actions";
import { combineReducers } from "redux";

function recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

function fav(state = [], action) {
  switch (action.type) {
    case FAV_RECIPE:
      state = [...state, action.item];
      return state;
    default:
      return state;
  }
}

const star = {
  inFav: false
};

function tStar(state = star, action) {
  switch (action.type) {
    case STAR:
      if (state.inFav === true) {
        return {
          inFav: false
        };
      } else {
        return {
          inFav: true
        };
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, fav, tStar });
export default rootReducer;
