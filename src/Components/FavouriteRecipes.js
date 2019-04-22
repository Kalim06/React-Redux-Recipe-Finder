import React, { Component } from "react";
import { connect } from "react-redux";
import Favitem from "./FavItem";
import { Link } from "react-router-dom";

class FavouriteRecipes extends Component {
  render() {
    let { favou } = this.props;

    return (
      <div>
        <h4 className="link">
          <Link to="/">Recipes</Link>
        </h4>
        <h4>Favourite Recipes</h4>
        <div>
          {favou.map((r, index) => {
            return <Favitem key={index} recipe={r} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favou: state.fav
  };
}

export default connect(mapStateToProps)(FavouriteRecipes);
