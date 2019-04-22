import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";

class RecipeList extends Component {
  render() {
    return (
      <div>
        {this.props.fav.length > 0 ? (
          <h4 className="link">
            <Link to="/fav">Favourites</Link>
          </h4>
        ) : (
          <div />
        )}
        {this.props.recipes.map((r, index) => {
          return <RecipeItem key={index} recipe={r} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(RecipeList);
