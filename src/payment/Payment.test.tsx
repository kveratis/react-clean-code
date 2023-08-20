import { render, screen, userEvent } from "../test/utils";
import { Payment } from "./Payment";

describe("Payment", () => {
  it("renders payment section", () => {
    render(<Payment />);
    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("renders current amount on button", () => {
    render(<Payment amount={20} />);
    expect(screen.getByText("$20")).toBeInTheDocument();
  });

  it("shows an option for user to round up", () => {
    render(<Payment amount={19.9} />);
    expect(
      screen.getByText("I'd like to donate $0.1 to charity")
    ).toBeInTheDocument();
  });

  it("allows user to donate", async () => {
    render(<Payment amount={19.9} />);

    const checkbox = screen.getByText("I'd like to donate $0.1 to charity");
    userEvent.click(checkbox);

    expect(await screen.findByText("$20")).toBeInTheDocument();
  });

  it("allows user to opt-out", async () => {
    render(<Payment amount={19.9} />);

    const checkbox = screen.getByText("I'd like to donate $0.1 to charity");

    userEvent.click(checkbox);
    expect(await screen.findByText("$20")).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(await screen.findByText("$19.9")).toBeInTheDocument();
  });

  it("shows thanks when user selected to donate", async () => {
    render(<Payment amount={19.9} />);

    const checkbox = screen.getByText("I'd like to donate $0.1 to charity");
    userEvent.click(checkbox);

    expect(
      await screen.findByText("Thanks for your donation!")
    ).toBeInTheDocument();
  });
});
