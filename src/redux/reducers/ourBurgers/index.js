import { SWITCH_MENU, SELECT_ORDER_METHOD } from './type'

import menuMeals from '../../../assets/images/menu-meals.png'
import menuSalads from '../../../assets/images/menu-salads.png'
import menuDesserts from '../../../assets/images/menu-desserts.png'
import menuBeverages from '../../../assets/images/menu-beverages.png'

const INITIAL_STATE = {
  bestOffers: [
    {
      id: 1938563948,
      imageUrl: 'https://live.staticflickr.com/65535/49768011471_39a4140283_z.jpg',
      name: 'Beef Egg Burger',
      price: 18,
      rating: 4,
      description: 'Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.',
      isNewProduct: false
    },
    {
      id: 9385647384,
      imageUrl: 'https://live.staticflickr.com/4098/4934837530_0cca779091_z.jpg',
      name: 'Beef Potato Burger',
      price: 12,
      rating: 4,
      description: 'Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.',
      isNewProduct: false
    },
    {
      id: 9284658463,
      imageUrl: 'https://live.staticflickr.com/8631/16505521041_b7d25f7dc8_z.jpg',
      name: 'Double Beef Burger',
      price: 20,
      rating: 4.5,
      description: 'Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.',
      isNewProduct: false
    },
    {
      id: 1984719291,
      imageUrl: 'https://live.staticflickr.com/4269/34544340164_b0387590f8_z.jpg',
      name: 'Melted Cheese Burger',
      price: 14,
      rating: 4,
      description: 'Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.',
      isNewProduct: false
    },
    {
      id: 2937836443,
      imageUrl: 'https://live.staticflickr.com/2880/33359463604_c5c8bc6b10_z.jpg',
      name: 'Black Bean Veggie Burger',
      price: 13,
      rating: 3,
      description: 'Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.',
      isNewProduct: false
    },
    {
      id: 1237493599,
      imageUrl: 'https://live.staticflickr.com/7438/16320962599_3c11e39b77_z.jpg',
      name: 'Cheesy Roll Sandwich',
      price: 14,
      rating: 4,
      description: 'Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.',
      isNewProduct: false
    }
  ],
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
      name: 'Ala cater & value meals',
      menu: [
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
    },
    {
      icon: menuSalads,
      name: 'Salads/sides',
      menu: [
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
    },
    {
      icon: menuDesserts,
      name: 'Desserts',
      menu: [
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
    },
    {
      icon: menuBeverages,
      name: 'Beverages',
      menu: [
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
