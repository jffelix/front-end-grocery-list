import React from "react";

var GroceryList = (props) => (

  <ul className="groceries">
    {props.groceryItem.map((item, index) =>
      <li>{item.name} - {item.quantity}</li>
    )}
  </ul>

)

export default GroceryList;