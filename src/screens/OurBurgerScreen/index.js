import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../../components/Header'
import CustomButton from '../../components/CustomButton'

class OurBurgerScreen extends Component {
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
      <View style={styles['container']}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderHeader = () => {
    return (
      <Header withBack />
    )
  }

  renderContent = () => {
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
            styles['text'],
            styles['text--3xl'],
            styles['text--black'],
            styles['text--bold']
          ]}
        >
          Order Method
        </Text>

        <Text
          style={[
            styles['text'],
            styles['text--l'],
            styles['text--black'],
            styles['text--semibold'],
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
            <TouchableOpacity
              onPress={() => this.onPressMethod(index)}
              style={{ marginTop: 20 }}
            >
              <View style={styles['order-method__button']}>
                <Text
                  style={[
                    styles['text'],
                    styles['text--large'],
                    styles['text--semibold'],
                    styles['text--black']
                  ]}
                >
                  {item.name}
                </Text>

                <MaterialCommunityIcons
                  name='check-circle'
                  color={checkColor}
                  size={16}
                />
              </View>
            </TouchableOpacity>
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
    return (
      <CustomButton
        titleButton='Proceed to Order'
        buttonStyle={styles['proceed__button']}
        onPress={() => {}}
      />
    )
  }
}

export default OurBurgerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7'
  },
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
  },

  text: {
    includeFontPadding: false
  },
  'text--black': {
    color: '#1D2126'
  },
  'text--bold': {
    fontFamily: 'Nunito-Bold'
  },
  'text--semibold': {
    fontFamily: 'Nunito-SemiBold'
  },
  'text--small': {
    fontSize: 10
  },
  'text--medium': {
    fontSize: 12
  },
  'text--large': {
    fontSize: 14
  },
  'text--xl': {
    fontSize: 16
  },
  'text--xxl': {
    fontSize: 18
  },
  'text--3xl': {
    fontSize: 20
  }
})
