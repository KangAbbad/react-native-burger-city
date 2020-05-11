import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { BaseStyles } from '../../../../constant'

import menuMeals from '../../../../assets/images/menu-meals.png'
import { IconButton, StandardButton } from '../../../global/CustomButton'

class CartSubtotalContent extends Component {
  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles['container']}
      >
        {this.renderLead()}
        {this.renderContent()}
      </ScrollView>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['lead']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--white'],
            BaseStyles['text--bold']
          ]}
        >
          Sub Total ( 1 Item )
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--orange'],
            BaseStyles['text--bold']
          ]}
        >
          520 LKR
        </Text>
      </View>
    )
  }

  renderContent = () => {
    return (
      <View style={styles['content']}>
        {this.renderReceipt()}
        {this.renderPromoteCode()}
        {this.renderCondiments()}
        {this.renderCheckoutButton()}
      </View>
    )
  }

  renderReceipt = () => {
    return (
      <View style={styles['receipt']}>
        <Image
          source={menuMeals}
          style={styles['receipt__icon']}
        />

        <View style={styles['receipt__info']}>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--black'],
              BaseStyles['text--semibold']
            ]}
          >
            1 Cheese Burger meal
          </Text>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--gray'],
              { marginTop: 10 }
            ]}
          >
            Cheese Burger
          </Text>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--gray']
            ]}
          >
            Fries pack
          </Text>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--gray']
            ]}
          >
            Coca Cola (250ml)
          </Text>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--gray']
            ]}
          >
            No Add On
          </Text>
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
            520 LKR
          </Text>
        </View>
      </View>
    )
  }

  renderPromoteCode = () => {
    return (
      <View style={styles['promote-code']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Promote Code
        </Text>

        <TextInput
          placeholder='Enter Your Promote Code'
          style={styles['promote-code__input']}
        />
      </View>
    )
  }

  renderCondiments = () => {
    return (
      <View style={styles['condiments']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Condiments
        </Text>

        <IconButton
          titleButton='Select Your Condiments'
          iconRight={
            <Ionicons
              name='ios-arrow-dropright-circle'
              size={20}
              color='#E3E5E8'
            />
          }
          buttonStyle={{ marginTop: 10 }}
        />
      </View>
    )
  }

  renderCheckoutButton = () => {
    return (
      <StandardButton
        titleButton='Check Out'
        buttonStyle={{ marginTop: 50 }}
        onPress={() => {}}
      />
    )
  }
}

export default CartSubtotalContent

const styles = StyleSheet.create({
  container: {
  },
  lead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D2126',
    paddingVertical: 25,
    paddingHorizontal: 20
  },
  content: {
    padding: 20
  },
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
  },
  'promote-code': {
    marginTop: 20
  },
  'promote-code__input': {
    borderRadius: 10,
    height: 'auto',
    fontFamily: 'Nunito-Regular',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10
  },
  condiments: {
    marginTop: 20
  }
})
