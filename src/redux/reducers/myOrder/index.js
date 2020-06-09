import { SAVE_ORDER_METHOD, ON_CHANGE_ADDRESS, ON_CHANGE_PICKUP } from './type'

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
    case SAVE_ORDER_METHOD:
      return {
        ...state,
        orderMethod: action.orderMethod
      }
    case ON_CHANGE_ADDRESS:
      return {
        ...state,
        deliveryDetails: {
          ...state.deliveryDetails,
          address: action.address
        }
      }
    case ON_CHANGE_PICKUP:
      return {
        ...state,
        deliveryDetails: {
          ...state.deliveryDetails,
          pickup: action.datetime
        }
      }
    default:
      return state
  }
}

export default myOrder
