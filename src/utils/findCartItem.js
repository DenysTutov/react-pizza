export const findCartItem = (items, payload) => {
  return items.find(
    item =>
      item.id === payload.id &&
      item.size === payload.size &&
      item.type === payload.type
  );
};
export const findCartItemById = (items, payload) => {
  return items.find(item => item.id === payload.id);
};
