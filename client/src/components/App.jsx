import React from "react";

import groceriesData from "../data/groceriesData.js";

import GroceryList from "./GroceryList.jsx";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: '',
      quantity: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {

    // console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  handleSubmit(event) {

    event.preventDefault();

    var newGrocery = {
      name: this.state.item,
      quantity: this.state.quantity
    }

    this.setState(groceriesData.concat(newGrocery));

  }

  render() {

    return(

    <div>
      <img src="grocery-bags.png" />
      <h1>Grocery List</h1>
      <form onSubmit={this.handleSubmit}>
        <label> Item
          <input name="item" onChange={this.handleChange} />
        </label>
        <label> Quantity
          <input name="quantity" onChange={this.handleChange} />
        </label>
        <button>Add Grocery</button>
        <GroceryList groceryItem={groceriesData}/>
      </form>
    </div>

    )

  }


};

export default App;