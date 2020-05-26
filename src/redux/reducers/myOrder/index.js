const INITIAL_STATE = {
  orderMethod: {},
  deliveryDetails: {
    address: '',
    pickup: {
      date: '',
      time: ''
    }
  },
  mealPackage: {
    image: '',
    name: '',
    count: '',
    burgerType: [
      {
        image: '',
        name: '',
        items: [
          {
            image: '',
            name: '',
            count: '',
            price: ''
          }
        ],
        price: ''
      }
    ],
    choices: {
      image: '',
      name: '',
      items: [
        {
          image: '',
          name: '',
          count: '',
          price: ''
        }
      ],
      price: ''
    },
    condiments: [
      {
        image: '',
        name: '',
        count: '',
        price: ''
      }
    ],
    price: '',
    promoCode: ''
  },
  noteForDriver: '',
  orderPayment: {
    name: '',
    amount: '',
    securityCheck: ''
  }
}

const myOrder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      break
  }
}

export default myOrder
