import { useEffect, useState } from "react";
import apiService from "./api";
import "./App.css";
import Login from "./views/Login/Login";
import Transfer from "./views/Transfer/Transfer";

function App() {
  const [transferStatus, setTransferStatus] = useState({
    amt: 0,
    msg: "",
    balance: null,
  });

  useEffect(() => {
    apiService
      .findUser("codefinity", "forgetmenot")
      .then((user) => {
        setTransferStatus((prev) => ({
          ...prev,
          balance: user[0].balance,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <Login />
      <Transfer />
      <p>
        {transferStatus.msg} {transferStatus.amt > 0 && transferStatus.amt}
      </p>

      <p>Your balance is now: {transferStatus.balance}</p>
    </>
  );
}

export default App;
