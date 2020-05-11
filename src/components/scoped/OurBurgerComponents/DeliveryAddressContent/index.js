import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { StandardButton, IconButton } from '../../../global/CustomButton'
import { BaseStyles } from '../../../../constant'

class DeliveryAddressContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOrderNow: true,
      isOrderInAdvance: false
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderLead()}
        {this.renderSettingOrder()}
        {this.renderSettingContent()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--large'],
          BaseStyles['text--black']
        ]}
      >
        To proceed, please confirm your delivery details
      </Text>
    )
  }

  renderSettingOrder = () => {
    const { isOrderNow, isOrderInAdvance } = this.state
    const orderNowButton = isOrderNow
      ? [
        styles['setting__button'],
        styles['setting__button--active']
      ]
      : [
        styles['setting__button'],
        styles['setting__button--inactive']
      ]

    const orderInAdvanceButton = isOrderInAdvance
      ? [
        styles['setting__button'],
        styles['setting__button--active']
      ]
      : [
        styles['setting__button'],
        styles['setting__button--inactive']
      ]

    const titleOrderNowButton = isOrderNow
      ? BaseStyles['text--white']
      : BaseStyles['text--black']

    const titleOrderInAdvanceButton = isOrderInAdvance
      ? BaseStyles['text--white']
      : BaseStyles['text--black']

    return (
      <View style={styles['setting']}>
        <TouchableOpacity
          onPress={this.onSetting}
          style={orderNowButton}
        >
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--bold'],
              BaseStyles['text--xl'],
              titleOrderNowButton
            ]}
          >
            Order Now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onSetting}
          style={orderInAdvanceButton}
        >
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--bold'],
              BaseStyles['text--xl'],
              titleOrderInAdvanceButton
            ]}
          >
            Order in Advance
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  onSetting = () => {
    const { isOrderNow, isOrderInAdvance } = this.state
    if (isOrderNow) {
      this.setState({
        isOrderNow: false,
        isOrderInAdvance: true
      })
    } else if (isOrderInAdvance) {
      this.setState({
        isOrderNow: true,
        isOrderInAdvance: false
      })
    }
  }

  renderSettingContent = () => {
    const { isOrderNow, isOrderInAdvance } = this.state
    if (isOrderNow) {
      return this.renderOrderNow()
    } else if (isOrderInAdvance) {
      return this.renderOrderInAdvance()
    }

    return null
  }

  renderOrderNow = () => {
    return (
      <View style={styles['setting__content']}>
        {this.renderEditAddress()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderOrderInAdvance = () => {
    return (
      <View style={styles['setting__content']}>
        {this.renderEditAddress()}
        {this.renderEditSchedule()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderEditAddress = () => {
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
          Delivery Address
        </Text>

        <IconButton
          titleButton='No. 02, 6th Lane, Colombo 03'
          iconRight={
            <EvilIcons
              name='pencil'
              size={20}
              color='#FF9F1C'
            />
          }
          buttonStyle={{
            paddingRight: 15,
            marginTop: 18
          }}
        />
      </View>
    )
  }

  renderEditSchedule = () => {
    return (
      <View style={styles['schedule']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Delivery Date & Time
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black']
          ]}
        >
          Please select delivery date & time
        </Text>

        <IconButton
          titleButton='Delivery Date & Time'
          iconRight={
            <EvilIcons
              name='pencil'
              size={20}
              color='#FF9F1C'
            />
          }
          buttonStyle={{
            paddingRight: 15,
            marginTop: 18
          }}
        />
      </View>
    )
  }

  renderProceedButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Proceed to Order'
        onPress={onProceed}
        buttonStyle={styles['proceed-order__button']}
      />
    )
  }
}

DeliveryAddressContent.propTypes = {
  onProceed: PropTypes.func
}

export default DeliveryAddressContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  setting: {
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    marginTop: 20
  },
  setting__button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12
  },
  'setting__button--active': {
    backgroundColor: '#FF9F1C'
  },
  'setting__button--inactive': {
    backgroundColor: '#FFFFFF'
  },
  setting__content: {
    flex: 1,
    marginTop: 20
  },
  edit__button: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 18
  },
  schedule: {
    marginTop: 30
  },
  'proceed-order__button': {
    marginTop: 'auto',
    marginBottom: 30
  }
})
