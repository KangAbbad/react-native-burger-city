import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'

import { BaseStyles } from '../../../constant'
import menuMeals from '../../../assets/images/menu-meals.png'

class CardOrder extends Component {
  render () {
    const { containerStyle } = this.props

    const wrapperStyle = [
      styles['receipt'],
      containerStyle
    ]

    return (
      <View style={wrapperStyle}>
        {this.renderIcon()}
        {this.renderInfo()}
      </View>
    )
  }

  renderIcon = () => {
    return (
      <Image
        source={menuMeals}
        style={styles['receipt__icon']}
      />
    )
  }

  renderInfo = () => {
    return (
      <View style={styles['receipt__info']}>
        {this.renderInfoPackage()}
        {this.renderInfoPackageList()}
        {this.renderInfoPrice()}
      </View>
    )
  }

  renderInfoPackage = () => {
    const { mealPackage } = this.props
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--large'],
          BaseStyles['text--black'],
          BaseStyles['text--semibold']
        ]}
      >
        {mealPackage}
      </Text>
    )
  }

  renderInfoPackageList = () => {
    const { listPackage } = this.props
    return (
      <FlatList
        data={listPackage}
        keyExtractor={(item, index) => item + index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
        renderItem={this.renderPackageListItem}
      />
    )
  }

  renderPackageListItem = ({ item }) => {
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

  renderInfoPrice = () => {
    const { price } = this.props
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
        {`${price} LKR`}
      </Text>
    )
  }
}

CardOrder.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  mealPackage: PropTypes.string,
  listPackage: PropTypes.array,
  price: PropTypes.number
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
