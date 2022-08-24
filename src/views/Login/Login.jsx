import apiService from "api";
import Input from "components/Input";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    apiService.findUser(username, password).then((loggedInUser) => {
      setUser(loggedInUser[0]);
    });

    console.log("submitted");
  };

  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <Input label="Username" />
      <Input label="Password" type="password" />

      <button
        type="submit"
        className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Login
      </button>
    </form>
  );
}
