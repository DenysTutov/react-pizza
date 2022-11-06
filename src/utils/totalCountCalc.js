export const totalCountCalc = items => {
  return items.reduce((acc, item) => {
    return item.count + acc;
  }, 0);
};
