import PropTypes from "prop-types";

export default function Form({ handleSubmit }) {
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
  handleSubmit: PropTypes.func.isRequired,
};
