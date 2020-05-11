import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { StandardButton, IconButton } from '../../../global/CustomButton'
import { BaseStyles } from '../../../../constant'

class OrderMethodContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      methods: [
        {
          name: 'In-Store',
          isActive: false
        },
        {
          name: 'Delivery',
          isActive: true
        },
        {
          name: 'Drive-Thru',
          isActive: false
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['content']}>
        {this.renderOrderMethod()}
        {this.renderMethodList()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderOrderMethod = () => {
    return (
      <View style={styles['order-method']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Order Method
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--l'],
            BaseStyles['text--black'],
            BaseStyles['text--semibold'],
            { marginTop: 5 }
          ]}
        >
          Please select your order method
        </Text>
      </View>
    )
  }

  renderMethodList = () => {
    const { methods } = this.state

    return (
      <FlatList
        data={methods}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['order-method__list']}
        renderItem={({ item, index }) => {
          const checkColor = item.isActive ? '#FF9F1C' : '#E3E5E8'
          return (
            <IconButton
              titleButton={item.name}
              iconRight={
                <MaterialCommunityIcons
                  name='check-circle'
                  color={checkColor}
                  size={18}
                />
              }
              buttonStyle={{ marginTop: 20 }}
              onPress={() => this.onPressMethod(index)}
            />
          )
        }}
      />
    )
  }

  onPressMethod = (index) => {
    const { methods } = this.state
    const newMethods = []

    methods.map((item, i) => {
      newMethods.push(item)

      if (index === i) {
        newMethods[index].isActive = true
      } else {
        newMethods[i].isActive = false
      }
    })

    this.setState({ methods: newMethods })
  }

  renderProceedButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Proceed to Order'
        buttonStyle={styles['proceed__button']}
        onPress={onProceed}
      />
    )
  }
}

OrderMethodContent.propTypes = {
  onProceed: PropTypes.func
}

export default OrderMethodContent

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  'order-method': {
    paddingHorizontal: 20,
    paddingTop: 25
  },
  'order-method__list': {
    paddingHorizontal: 20
  },
  'order-method__button': {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  proceed__button: {
    marginTop: 'auto',
    marginHorizontal: 20,
    marginBottom: 30
  }
})
