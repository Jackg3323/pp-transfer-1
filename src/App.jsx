import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [transferStatus, setTransferStatus] = useState({
    amt: 0,
    msg: "",
    balance: 100,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const transferAmt = event.target.elements[0].value;

    if (transferAmt > transferStatus.balance) {
      setTransferStatus((prevTransferStatus) => ({
        ...prevTransferStatus,
        msg: `You can't transfer more than ${transferStatus.balance}`,
      }));
    } else {
      transferStatus.balance -= transferAmt;

      setTransferStatus((prevTransferStatus) => ({
        ...prevTransferStatus,
        amt: transferAmt,
        msg: "You transferred ",
      }));
    }

    event.target.reset();
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />

      <p>
        {transferStatus.msg} {transferStatus.amt > 0 && transferStatus.amt}
      </p>

      <p>Your balance is now: {transferStatus.balance}</p>
    </>
  );
}

export default App;
