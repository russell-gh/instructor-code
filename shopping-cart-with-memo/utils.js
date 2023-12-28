export const getConsumerPrice = (price, tax_rate) => {
  return `${Math.round((price * tax_rate) / 100)}`;
};
