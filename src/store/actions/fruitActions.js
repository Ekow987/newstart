export const fruitTypes = {
  ADD_FRUIT: "ADD_FRUIT ",
  DELETE_FRUIT: " DELETE_FRUIT",
};

const genID = () => {
  return Math.random() * 121;
};

export const fruitAction = {
  add: (img, title, para) => ({
    type: fruitTypes.ADD_FRUIT,
    payload: { id: genID, img, title, para },
  }),
  delete: (id) => ({
    type: fruitTypes.DELETE_FRUIT,
    payload: id,
  }),
};
