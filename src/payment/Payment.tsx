import { useRoundUp } from "./useRoundUp";
import { PaymentMethods } from "./PaymentMethods";
import { formatCheckboxLabel } from "./utils";

type PaymentProps = {
  amount: number;
  methods?: string[];
};

export const Payment = ({ amount = 0, methods = [] }: PaymentProps) => {
  const { agreeToDonate, total, tip, updateAgreeToDonate } = useRoundUp(amount);

  return (
    <div className="container">
      <h3>Payment</h3>
      <PaymentMethods methods={methods} />
      <div className="donation">
        <label>
          <input
            type="checkbox"
            checked={agreeToDonate}
            onChange={updateAgreeToDonate}
          />
          <span>{formatCheckboxLabel(agreeToDonate, tip)}</span>
        </label>
      </div>
      <button className="payment-button">${total}</button>
    </div>
  );
};
