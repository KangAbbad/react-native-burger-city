import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'

import { BaseStyles } from '../../../constant'
import menuMeals from '../../../assets/images/menu-meals.png'

let selfProps = {
  mealPackage: '',
  listPackage: [],
  price: 0
}

const CardOrder = (props) => {
  selfProps = props
  const { containerStyle } = props

  const wrapperStyle = [
    styles['receipt'],
    containerStyle
  ]

  return (
    <View style={wrapperStyle}>
      <RenderIcon />
      <RenderInfo />
    </View>
  )
}

const RenderIcon = () => {
  return (
    <Image
      source={menuMeals}
      style={styles['receipt__icon']}
    />
  )
}

const RenderInfo = () => {
  return (
    <View style={styles['receipt__info']}>
      <RenderInfoPackage />
      <RenderInfoPackageList />
      <RenderInfoPrice />
    </View>
  )
}

const RenderInfoPackage = () => {
  return (
    <Text
      style={[
        BaseStyles['text'],
        BaseStyles['text--large'],
        BaseStyles['text--black'],
        BaseStyles['text--semibold']
      ]}
    >
      {selfProps.mealPackage}
    </Text>
  )
}

const RenderInfoPackageList = () => {
  return (
    <FlatList
      data={selfProps.listPackage}
      keyExtractor={(item, index) => item + index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 10 }}
      renderItem={({ item }) => renderPackageListItem(item)}
    />
  )
}

const renderPackageListItem = (item) => {
  return (
    <Text
      style={[
        BaseStyles['text'],
        BaseStyles['text--large'],
        BaseStyles['text--gray']
      ]}
    >
      {item}
    </Text>
  )
}

const RenderInfoPrice = () => {
  return (
    <Text
      style={[
        BaseStyles['text'],
        BaseStyles['text--large'],
        BaseStyles['text--orange'],
        BaseStyles['text--bold'],
        {
          marginTop: 30,
          marginRight: 20,
          marginLeft: 'auto'
        }
      ]}
    >
      {`${selfProps.price} LKR`}
    </Text>
  )
}

CardOrder.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default CardOrder

const styles = StyleSheet.create({
  receipt: {
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20
  },
  receipt__icon: {
    height: 130,
    width: 155,
    marginTop: -20,
    marginLeft: -40
  },
  receipt__info: {
    flex: 1,
    marginLeft: 20
  }
})
