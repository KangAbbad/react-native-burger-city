import { SWITCH_MENU, SELECT_ORDER_METHOD } from './type'

import menuMeals from '../../../assets/images/menu-meals.png'
import menuSalads from '../../../assets/images/menu-salads.png'
import menuDesserts from '../../../assets/images/menu-desserts.png'
import menuBeverages from '../../../assets/images/menu-beverages.png'

const INITIAL_STATE = {
  orderMethod: [
    {
      name: 'In-Store',
      method: 'in-store',
      isActive: false
    },
    {
      name: 'Delivery',
      method: 'delivery',
      isActive: true
    },
    {
      name: 'Drive-Thru',
      method: 'drive-thru',
      isActive: false
    }
  ],
  isMenu: '',
  menuCategories: [
    {
      icon: menuMeals,
      name: 'Ala cater & value meals'
    },
    {
      icon: menuSalads,
      name: 'Salads/sides'
    },
    {
      icon: menuDesserts,
      name: 'Desserts'
    },
    {
      icon: menuBeverages,
      name: 'Beverages'
    }
  ],
  menuMeals: [
    {
      name: 'Chicken Burger',
      price: 12,
      isNewProduct: false
    },
    {
      name: 'Chicken Spicy Burger',
      price: 13,
      isNewProduct: false
    },
    {
      name: 'Beef Burger',
      price: 15,
      isNewProduct: false
    },
    {
      name: 'Cheesy Burger',
      price: 13,
      isNewProduct: false
    }
  ]
}

const ourBurgers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_MENU:
      return {
        ...state,
        isMenu: action.isMenu
      }
    case SELECT_ORDER_METHOD:
      return {
        ...state,
        orderMethod: action.newOrderMethod
      }
    default:
      return state
  }
}

export default ourBurgers
