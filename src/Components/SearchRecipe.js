import React, { Component } from "react";
import { Form, FormGroup, FormLabel, Button, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../redux/actions";

class SearchRecipe extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    let url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => this.props.setRecipes(json.results));
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients :-</FormLabel>
          <FormControl
            type="text"
            placeholder="chicken,onion"
            onChange={event => this.setState({ ingredients: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Dish :-</FormLabel>
          <FormControl
            type="text"
            placeholder="chicken soup"
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { setRecipes }
)(SearchRecipe);
