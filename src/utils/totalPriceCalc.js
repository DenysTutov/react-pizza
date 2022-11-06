export const totalPriceCalc = items => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum;
  }, 0);
};
