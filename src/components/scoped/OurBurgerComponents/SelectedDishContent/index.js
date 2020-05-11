import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { BaseStyles } from '../../../../constant'
import { IconButton } from '../../../global/CustomButton'

import fullBurger from '../../../../assets/images/full-burger.png'

class SelectedDishContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: [
        {
          name: 'Chicken Big Burger',
          category: 'Ala carte',
          price: 380
        },
        {
          name: 'Chicken Spicy Burger',
          category: 'Ala carte',
          price: 320
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderLead()}
        {this.renderMenu()}
      </View>
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
          Chicken Burgers
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black']
          ]}
        >
          Please select your burger type
        </Text>

        <Image
          source={fullBurger}
          style={styles['lead__hero']}
        />
      </View>
    )
  }

  renderMenu = () => {
    const { menu } = this.state
    return (
      <FlatList
        data={menu}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderMenuItem}
        contentContainerStyle={{ marginTop: 15 }}
      />
    )
  }

  renderMenuItem = ({ item }) => {
    const { onProceed } = this.props
    return (
      <IconButton
        titleButton={item.name}
        subtitleButton={item.category}
        iconRight={
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={20}
            color='#E3E5E8'
          />
        }
        subtitleRight={`${item.price} LKR`}
        buttonStyle={{ marginTop: 15 }}
        subtitleStyle={{ color: '#727C8E' }}
        onPress={onProceed}
      />
    )
  }
}

SelectedDishContent.propTypes = {
  onProceed: PropTypes.func
}

export default SelectedDishContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  lead__hero: {
    marginTop: 50
  }
})
