export function transformPaymentMethods(methods: string[]) {
  if (methods.length > 0) {
    const extended = methods.map((method) => ({
      provider: method,
      label: `Pay with ${method}`,
    }));
    extended.push({ provider: "cash", label: "Pay in cash" });
    return extended;
  }
  return [];
}

export function formatCheckboxLabel(agreeToDonate: boolean, tip: number) {
  return agreeToDonate
    ? "Thanks for your donation!"
    : `I'd like to donate $${tip} to charity`;
}
