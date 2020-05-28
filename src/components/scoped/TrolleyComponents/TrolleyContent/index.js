import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import { BaseStyles } from '../../../../constant'
import Stepper from '../../../global/Stepper'
import { StandardButton } from '../../../global/CustomButton'

class TrolleyContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [0, 1, 2]
    }
  }

  render () {
    const { orders } = this.state
    if (orders.length) {
      return (
        <View style={styles['container']}>
          {this.renderLead()}
          {this.renderOrderList()}
          {this.renderCheckout()}
        </View>
      )
    } else {
      return this.renderEmptyTrolley()
    }
  }

  renderLead = () => {
    return (
      <View style={styles['lead']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--extrabold'],
            BaseStyles['text--black']
          ]}
        >
          Confirmation
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--medium'],
            BaseStyles['text--gray'],
            { marginTop: 3 }
          ]}
        >
          Order number is 1738091238
        </Text>
      </View>
    )
  }

  renderOrderList = () => {
    const { orders } = this.state
    return (
      <FlatList
        data={orders}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        contentContainerStyle={styles['order-list']}
        renderItem={this.renderOrderListItem}
        ListFooterComponent={this.renderOrderDetail()}
      />
    )
  }

  renderOrderListItem = ({ item }) => {
    return (
      <View style={styles['order-list__item']}>
        <Image
          source={{ uri: 'https://live.staticflickr.com/8631/16505521041_b7d25f7dc8_z.jpg' }}
          style={styles['order-list__item__image']}
        />

        <View style={styles['order-list__item__info']}>
          <View style={styles['order-list__item__info--menu']}>
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--bold'],
                BaseStyles['text--black'],
                { flex: 1.5 }
              ]}
            >
              Double Cheese Burger
            </Text>

            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--bold'],
                BaseStyles['text--orange'],
                BaseStyles['text--right'],
                { flex: 0.5 }
              ]}
            >
              $1300
            </Text>
          </View>

          <View>
            <Stepper
              containerStyle={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                width: 100,
                marginTop: 20,
                marginLeft: 'auto'
              }}
            />
          </View>
        </View>
      </View>
    )
  }

  renderOrderDetail = () => {
    const { onPickupTime } = this.props
    return (
      <View style={styles['order-detail']}>
        <View style={styles['order-detail__lead']}>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--xxl'],
              BaseStyles['text--bold'],
              BaseStyles['text--black']
            ]}
          >
            Delivery by:
          </Text>

          <TouchableOpacity onPress={onPickupTime}>
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--orange']
              ]}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles['order-detail__info']}>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--gray']
            ]}
          >
            No. 02, 6th Lane, Colombo 03
          </Text>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--medium'],
              BaseStyles['text--gray'],
              { marginTop: 5 }
            ]}
          >
            19 / 10 / 2018  10:00 AM
          </Text>
        </View>
      </View>
    )
  }

  renderEmptyTrolley = () => {
    return (
      <View style={styles['empty-trolley']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black']
          ]}
        >
          Let's Order Burger!
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--gray'],
            { marginTop: 10 }
          ]}
        >
          Made your happy day with our burger.
        </Text>
      </View>
    )
  }

  renderCheckout = () => {
    return (
      <View style={styles['checkout']}>
        <View style={styles['checkout__amount']}>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--xxl'],
              BaseStyles['text--bold'],
              BaseStyles['text--black']
            ]}
          >
            Order amount:
          </Text>

          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--xxl'],
              BaseStyles['text--bold'],
              BaseStyles['text--orange']
            ]}
          >
            $100
          </Text>
        </View>

        <StandardButton
          titleButton='Checkout'
          buttonStyle={{ marginTop: 15 }}
        />
      </View>
    )
  }
}

TrolleyContent.propTypes = {
  onPickupTime: PropTypes.func
}

export default TrolleyContent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lead: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  'order-list': {},
  'order-list__item': {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  'order-list__item__image': {
    borderRadius: 7,
    height: 80,
    width: 80
  },
  'order-list__item__info': {
    flex: 1,
    marginLeft: 15,
    paddingVertical: 5
  },
  'order-list__item__info--menu': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  'order-detail': {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 15
  },
  'order-detail__lead': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  'order-detail__info': {
    marginTop: 15
  },
  'empty-trolley': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  checkout: {
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  checkout__amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
