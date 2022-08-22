import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

const balance = 100;

function App() {
  const [transferStatus, setTransferStatus] = useState({ amt: 0, msg: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    const amt = event.target.elements[0].value;

    if (amt > balance) {
      setTransferStatus({
        amt: 0,
        msg: `You can't transfer more than ${balance}`,
      });
    } else {
      setTransferStatus({
        amt,
        msg: "You transferred ",
      });
    }

    event.target.reset();
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />

      <p>
        {transferStatus.msg} {transferStatus.amt > 0 && transferStatus.amt}
      </p>

      <p>Your balance is now: {balance - transferStatus.amt}</p>
    </>
  );
}

export default App;
