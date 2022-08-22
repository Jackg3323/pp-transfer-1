import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

it("calls the submit handler whenever the form is submitted", () => {
  const handleSubmit = jest.fn((e) => e.preventDefault());

  render(<Form handleSubmit={handleSubmit} />);
  userEvent.click(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalled();
});
