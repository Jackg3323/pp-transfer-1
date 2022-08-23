import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const testBalance = 100;

it("renders the updated amount when the form is submitted", () => {
  const transferAmt = 50;
  const expectedTransferMsg = `You transferred ${transferAmt}`;
  const expectedBalanceMsg = `Your balance is now: ${
    testBalance - transferAmt
  }`;

  render(<App />);
  const input = screen.getByLabelText("Transfer Amount");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedTransferMsg)).toBeInTheDocument();
  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
});

it("prevents negative balances from occurring", () => {
  const transferAmt = 1000;
  const expectedMsg = `You can't transfer more than ${testBalance}`;

  render(<App />);
  const input = screen.getByLabelText("Transfer Amount");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedMsg)).toBeInTheDocument();
});
