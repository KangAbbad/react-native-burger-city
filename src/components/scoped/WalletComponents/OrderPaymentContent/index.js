import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyles } from '../../../../constant'
import { IconButton, StandardButton } from '../../../global/CustomButton'
import InputBox from '../../../global/InputBox'

class OrderPaymentContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wallets: [
        {
          name: 'M Wallet',
          isActive: false
        },
        {
          name: 'Cash on Delivery',
          isActive: false
        },
        {
          name: 'Apple Pay',
          isActive: true
        },
        {
          name: 'Samsung Pay',
          isActive: false
        }
      ]
    }
  }

  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {this.renderPayment()}
        {this.renderSecurityCheck()}
      </ScrollView>
    )
  }

  renderPayment = () => {
    return (
      <View style={styles['payment']}>
        {this.renderLead()}
        {this.renderOption()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--3xl'],
          BaseStyles['text--black'],
          BaseStyles['text--bold']
        ]}
      >
        Order Payment
      </Text>
    )
  }

  renderOption = () => {
    const { wallets } = this.state
    return (
      <FlatList
        data={wallets}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderOptionItem}
      />
    )
  }

  renderOptionItem = ({ item }) => {
    const checkColor = item.isActive
      ? '#FF9F1C'
      : '#E3E5E8'

    return (
      <IconButton
        titleButton={item.name}
        iconRight={
          <MaterialCommunityIcons
            name='check-circle'
            size={20}
            color={checkColor}
          />
        }
        buttonStyle={{ marginTop: 20 }}
      />
    )
  }

  renderSecurityCheck = () => {
    const { onProceed } = this.props
    return (
      <View style={styles['security-check']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--black'],
            BaseStyles['text--semibold']
          ]}
        >
          Security Check
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--giant'],
            BaseStyles['text--black'],
            BaseStyles['text--extrabold']
          ]}
        >
          5478
        </Text>
        <InputBox
          placeholder='Security Code'
          containerStyle={{
            marginTop: 10
          }}
        />
        <StandardButton
          titleButton='Confirm'
          buttonStyle={{ marginTop: 15 }}
          onPress={onProceed}
        />
      </View>
    )
  }
}

OrderPaymentContent.propTypes = {
  onProceed: PropTypes.func
}

export default OrderPaymentContent

const styles = StyleSheet.create({
  payment: {
    padding: 20
  },
  'security-check': {
    borderTopWidth: 1,
    borderTopColor: '#E2E3E7',
    padding: 20,
    marginTop: 10
  }
})
