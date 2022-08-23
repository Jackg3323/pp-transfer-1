import Input from "components/Input";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

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
