export const fruitTypes ={
    ADD_FRUIT : "ADD_FRUIT ",
    DELETE_FRUIT : " DELETE_FRUIT",
};

export const fruitAction = {
    add:(img,title,para)=>({
        type:fruitTypes.ADD_FRUIT,
        payload:{img,title,para},
    }),
    delete: (id) => ({ type: fruitTypes.DELETE_FRUIT, payload: id }),
};
