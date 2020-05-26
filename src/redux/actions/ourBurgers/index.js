import { SWITCH_MENU, SELECT_ORDER_METHOD } from '../../reducers/ourBurgers/type'

export const onSwitchMenu = (isMenu) => {
  return {
    type: SWITCH_MENU,
    isMenu: isMenu
  }
}

export const onSelectOrderMethod = (index) => {
  return (dispatch, getState) => {
    const { orderMethod } = getState().ourBurgers
    const newOrderMethod = []

    orderMethod.map((item, i) => {
      newOrderMethod.push(item)

      if (index === i) {
        newOrderMethod[index].isActive = true
      } else {
        newOrderMethod[i].isActive = false
      }
    })

    dispatch({
      type: SELECT_ORDER_METHOD,
      newOrderMethod: newOrderMethod
    })
  }
}
