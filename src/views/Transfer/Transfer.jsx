import Input from "components/Input";

export default function Transfer() {
  return (
    <form className="mx-auto flex w-48 flex-col items-center">
      <Input label="Amount" type="number" />
      <button
        type="submit"
        className="py2 mt-4 rounded bg-green-500 px-4 text-white"
      >
        Submit
      </button>
    </form>
  );
}
