import Form from "components/Form/Form";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitted");
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <form className="mx-auto flex w-48 flex-col items-center">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="rounded border pl-2" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="rounded border pl-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
        >
          Login
        </button>
      </form>
    </Form>
  );
}
