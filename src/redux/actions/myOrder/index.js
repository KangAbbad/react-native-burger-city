import { SAVE_ORDER_METHOD, ON_CHANGE_ADDRESS, ON_CHANGE_PICKUP } from '../../reducers/myOrder/type'

export const onSaveOrderMethod = (orderMethod) => {
  return {
    type: SAVE_ORDER_METHOD,
    orderMethod: orderMethod
  }
}

export const onChangeAddress = (address) => {
  return {
    type: ON_CHANGE_ADDRESS,
    address
  }
}

export const onChangePickup = (datetime) => {
  return {
    type: ON_CHANGE_PICKUP,
    datetime
  }
}
