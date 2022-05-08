import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaData, setPizzaData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then((res) => res.json())
    .then((data) => setPizzaData(data))
  }, []);

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizzaData}/>
    </>
  );
}

export default App;
