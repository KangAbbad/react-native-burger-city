import { SELECT_ITEM, ADD_FAVOURITE, REMOVE_FAVOURITE } from './type'

const INITIAL_STATE = {
  banners: [
    {
      name: 'Beef Cheese Burger',
      lead: 'Our Pride, Beef Cheese Burger',
      imageUrl: 'https://live.staticflickr.com/4025/4671819961_69e1d93f81_z.jpg'
    },
    {
      name: 'Vegetables Burger',
      lead: 'Feeling Healthy Everyday',
      imageUrl: 'https://live.staticflickr.com/8008/7254701292_86c5ee65bd_z.jpg'
    },
    {
      name: 'Saucy Burger',
      lead: "Nothing Worry, It's Low Fat",
      imageUrl: 'https://live.staticflickr.com/2083/1616104514_8c12518912_z.jpg'
    },
    {
      name: 'Discount',
      lead: 'FREE Covid-19!!! Discount Up to 50%, For Take-Away Order',
      imageUrl: 'https://live.staticflickr.com/4801/40568807461_be45ea8185_z.jpg'
    }
  ],
  selectedItem: {
    id: 0,
    imageUrl: '',
    name: '',
    price: 0,
    rating: 0,
    description: '',
    isNewProduct: false
  },
  favourites: []
}

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.selectedItem
      }
    case ADD_FAVOURITE:
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: action.newFavourites
      }
    default:
      return state
  }
}

export default home
