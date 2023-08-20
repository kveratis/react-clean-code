import { useEffect, useState } from "react";

export const Payment = ({ amount = 0 }: { amount?: number }) => {
  const [shouldRoundUp, setRoundUp] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(amount);
  const [tip, setTip] = useState<number>(0);

  useEffect(() => {
    if (shouldRoundUp) {
      setTotal(Math.floor(amount + 1));
    } else {
      setTotal(amount);
    }
    setTip(parseFloat((Math.floor(amount + 1) - amount).toPrecision(10)));
  }, [amount, shouldRoundUp]);

  const handleChange = () => {
    setRoundUp((shouldRoundUp) => !shouldRoundUp);
  };

  return (
    <div>
      <h4>Payment</h4>
      <label>
        <input
          type="checkbox"
          checked={shouldRoundUp}
          onChange={handleChange}
        />
        <span>
          {shouldRoundUp
            ? "Thanks for your donation!"
            : `I'd like to donate $${tip} to charity`}
        </span>
      </label>
      <button>${total}</button>
    </div>
  );
};
