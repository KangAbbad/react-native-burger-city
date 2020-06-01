import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native'

import { BaseStyles } from '../../../../constant'
import { StandardButton } from '../../../global/CustomButton'
import Stepper from '../../../global/Stepper'

import menuMeals from '../../../../assets/images/menu-meals.png'
import chickenBurger from '../../../../assets/images/chicken-spicy-burger.png'
import cocaCola from '../../../../assets/images/coca-cola.png'
import frenchFries from '../../../../assets/images/french-fries.png'

class CartContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countItem: 1,
      meals: [
        {
          icon: chickenBurger,
          name: 'Cheese Burger',
          editable: false
        },
        {
          icon: cocaCola,
          name: 'Coca cola (250ml)',
          editable: true
        },
        {
          icon: frenchFries,
          name: 'Fries pack',
          editable: true
        }
      ]
    }
  }

  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles['container']}
      >
        {this.renderLead()}
        {this.renderButton()}
        {this.renderMeals()}
      </ScrollView>
    )
  }

  renderLead = () => {
    return (
      <View>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Cheese Burger Meal
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black']
          ]}
        >
          Please customize your meal
        </Text>

        <Image
          source={menuMeals}
          style={styles['lead__hero']}
        />
      </View>
    )
  }

  renderButton = () => {
    const { onProceed } = this.props
    return (
      <View style={styles['button__wrapper']}>
        <Stepper
          onCount={(countNumber) => {
            this.setState({ countItem: countNumber })
          }}
        />
        <StandardButton
          titleButton='Add to Cart'
          buttonStyle={{ flex: 1, marginLeft: 10 }}
          onPress={onProceed}
        />
      </View>
    )
  }

  renderMeals = () => {
    const { meals } = this.state
    return (
      <View style={styles['meals__wrapper']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Includes
        </Text>

        <FlatList
          data={meals}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={this.renderMealItem}
        />
      </View>
    )
  }

  renderMealItem = ({ item, index }) => {
    const iconStyle = index === 0
      ? [
        styles['meals__item__icon'],
        { height: 30, width: 30, marginTop: -10 }
      ]
      : styles['meals__item__icon']

    const resizeMode = index === 0
      ? 'cover'
      : 'contain'

    return (
      <View style={styles['meals__item']}>
        <Image
          source={item.icon}
          resizeMode={resizeMode}
          style={iconStyle}
        />

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            BaseStyles['text--semibold']
          ]}
        >
          {item.name}
        </Text>

        {item.editable ? (
          <StandardButton
            titleButton='Change'
            buttonStyle={styles['meals__item__button']}
            titleStyle={{ fontSize: 12 }}
          />
        ) : null}
      </View>
    )
  }
}

CartContent.propTypes = {
  onProceed: PropTypes.func
}

export default CartContent

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  lead__hero: {
    height: 180,
    width: 230,
    alignSelf: 'center'
  },
  button__wrapper: {
    flexDirection: 'row',
    marginTop: 40
  },
  meals__wrapper: {
    marginTop: 20
  },
  meals__item: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15
  },
  meals__item__icon: {
    height: 30,
    width: 30,
    marginRight: 20
  },
  meals__item__button: {
    borderRadius: 5,
    marginLeft: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})
