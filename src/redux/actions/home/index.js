import Toast from 'react-native-simple-toast'
import { SELECT_ITEM, ADD_FAVOURITE, REMOVE_FAVOURITE, ADD_TROLLEY, REMOVE_TROLLEY } from '../../reducers/home/type'

export const onSelectItem = (item) => {
  return {
    type: SELECT_ITEM,
    selectedItem: item
  }
}

export const onAddFavourite = (item) => {
  return (dispatch, getState) => {
    const { favourites } = getState().home
    const newFavourites = [...favourites, item]
    const favouritesNoDuplicate = new Set(newFavourites)

    Toast.showWithGravity(
      'Added to favourite.',
      Toast.SHORT,
      Toast.TOP
    )

    dispatch({
      type: ADD_FAVOURITE,
      newFavourites: [...favouritesNoDuplicate]
    })
  }
}

export const onRemoveFavourite = (id) => {
  return (dispatch, getState) => {
    const { favourites } = getState().home

    const filteredFavourite = favourites.filter((item, index) => {
      return item.id !== id
    })

    dispatch({
      type: REMOVE_FAVOURITE,
      newFavourites: filteredFavourite
    })
  }
}

export const onAddTrolley = (item) => {
  return (dispatch, getState) => {
    const { trolley } = getState().home
    const newTrolley = [...trolley]

    const foundItem = newTrolley.find(food => food.id === item.id)

    if (foundItem) {
      foundItem.countNumber = item.countNumber
    } else {
      newTrolley.push(item)
    }

    dispatch({
      type: ADD_TROLLEY,
      newTrolley: newTrolley
    })
  }
}

export const onRemoveTrolley = (index) => {
  return (dispatch, getState) => {
    const { trolley } = getState().home
    trolley.splice(index, 1)
    dispatch({
      type: REMOVE_TROLLEY,
      newTrolley: trolley
    })
  }
}
