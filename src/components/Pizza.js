import React from "react";

function Pizza({pizza, onEditPizza}) {
  function handleButtonClick() {
    onEditPizza(pizza)
  }
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "yes" : "no"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
