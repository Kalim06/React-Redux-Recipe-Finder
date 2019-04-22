import React, { Component } from "react";
import { connect } from "react-redux";
import { favRecipe, star } from "../redux/actions";

class RecipeItem extends Component {
  render() {
    let { recipe, favRecipe, star } = this.props;
    console.log("ri", this.props);

    function fav(r) {
      favRecipe(r);
      star(r);
    }

    return (
      <div className="recipe-item">
        <div className="star" onClick={() => fav(recipe)}>
          &#9734;
        </div>
        <div className="recipe-text">
          <a href={recipe.href} target="_blank" rel="noopener noreferrer">
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { favRecipe, star }
)(RecipeItem);
