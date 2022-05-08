import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaData, setPizzaData] = useState([])
  const [pizzaSelected, setPizzaSelected] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then((res) => res.json())
    .then((data) => setPizzaData(data))
  }, []);

  function handleFormInputChange(fieldName, fieldValue) {
    setPizzaSelected({
      ...pizzaSelected,
      [fieldName]: fieldValue,
    });
  }

  function handlePizzaDataEdit(editedPizza) {
    const updatedList = pizzaData.map((pizza) => pizza.id === editedPizza.id ? editedPizza : pizza)
    setPizzaData(updatedList)
    setPizzaSelected(null)
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaSelected} onChangeFormInput={handleFormInputChange} editPizzaData={handlePizzaDataEdit}/>
      <PizzaList pizzas={pizzaData} onEditPizza={setPizzaSelected}/>
    </>
  );
}

export default App;
