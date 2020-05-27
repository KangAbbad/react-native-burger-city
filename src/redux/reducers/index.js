import { combineReducers } from 'redux'
import home from './home'
import ourBurgers from './ourBurgers'
import myOrder from './myOrder'

export default combineReducers({
  home,
  ourBurgers,
  myOrder
})
