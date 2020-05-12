import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { BaseStyles } from '../../../../constant'
import { IconButton, StandardButton } from '../../../global/CustomButton'
import CardOrder from '../../../global/CardOrder'

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
      <CardOrder
        mealPackage='1 Cheese Burger meal'
        listPackage={[
          'Cheese Burger',
          'Fries pack',
          'Coca Cola (250ml)',
          'No Add On'
        ]}
        price={520}
      />
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
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Check Out'
        buttonStyle={{ marginTop: 50 }}
        onPress={onProceed}
      />
    )
  }
}

CartSubtotalContent.propTypes = {
  onProceed: PropTypes.func
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
