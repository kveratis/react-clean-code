import { useEffect, useState } from "react";

export const useRoundUp = (amount: number) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(amount);
  const [tip, setTip] = useState<number>(0);

  useEffect(() => {
    const total = Math.floor(amount + 1);
    if (agreeToDonate) {
      setTotal(total);
    } else {
      setTotal(amount);
    }
    setTip(parseFloat((total - amount).toPrecision(10)));
  }, [amount, agreeToDonate]);

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);
  };

  return { agreeToDonate, total, tip, updateAgreeToDonate };
};
