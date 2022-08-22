import PropTypes from "prop-types";

export default function Form({ setAmt, handleFocus }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    setAmt(event.target.amt.value);

    event.target.reset();
  };

  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="number"
          placeholder="Enter Amount"
          id="amt"
          className="rounded border pl-2"
          onFocus={handleFocus}
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  setAmt: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
