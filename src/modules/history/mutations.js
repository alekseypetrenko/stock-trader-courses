export default {
  addNewPrice(state, newPrice) {

    state.priceByProducts = newPrice.reduce((acc, cur) => {
      const price = state.priceByProducts[cur.name] 
          ?  [...state.priceByProducts[cur.name], cur.price]
          : [cur.price]

      return {
        ...acc,
        [cur.name]: price
      }
    }, {})
    
  }
};
