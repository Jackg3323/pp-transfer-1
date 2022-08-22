import Form from "components/Form/Form";
import { useState } from "react";
import "./App.css";

const balance = 100;

function App() {
  const [amt, setAmt] = useState(0);

  const handleFocus = (event) => {
    console.log("focused");
  };

  const handleBlur = (event) => {
    console.log("blurred");
  };

  return (
    <>
      {/* TODO: Add another handler to pass in for 'onFocus'.
        See 'onBlur' to also conditionally render.
        This will clear off the last transfer message (e.g. conditional rendering)
      */}
      <Form setAmt={setAmt} handleFocus={handleFocus} />

      {amt > 0 &&
        (amt > balance ? (
          <p>No! U don&apos;t have money</p>
        ) : (
          <p>Ok. You transferred {amt}.</p>
        ))}

      {/* TODOs:
            1. Don't update the info below if I am going negative.
            2.
       */}
      {/* TODO: Conditionally render this as long as the balance is not negative */}
      <p>You have {balance - amt} left</p>
    </>
  );
}

export default App;
