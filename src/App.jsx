import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

const balance = 100;

function App() {
  const [amt, setAmt] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setAmt(event.target.elements[0].value);

    event.target.reset();
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />

      <p>You transferred {amt}</p>
      <p>Your balance is now: {balance - amt}</p>
    </>
  );
}

export default App;
