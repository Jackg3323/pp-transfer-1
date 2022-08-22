import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("renders the updated amount when the form is submitted", () => {
  const transferAmt = 50;
  const expected = `You transferred ${transferAmt}`;

  render(<App />);
  const input = screen.getByLabelText("Transfer Amount");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expected)).toBeInTheDocument();
});
