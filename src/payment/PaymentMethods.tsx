import { useMemo } from "react";
import { PaymentMethodType } from "./types";
import { transformPaymentMethods } from "./utils";

const PaymentMethod = (props: { method: PaymentMethodType }) => {
  return (
    <label>
      <input
        type="radio"
        name="payment"
        value={props.method.provider}
        defaultChecked={props.method.provider === "cash"}
      />
      <span>{props.method.label}</span>
    </label>
  );
};

export const PaymentMethods = ({ methods }: { methods: string[] }) => {
  const paymentMethods = useMemo(
    () => transformPaymentMethods(methods),
    [methods]
  );

  return (
    <div className="paymentMethods">
      {paymentMethods.map((method) => (
        <PaymentMethod key={method.provider} method={method} />
      ))}
    </div>
  );
};
