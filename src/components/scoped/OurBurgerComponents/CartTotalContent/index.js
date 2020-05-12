import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image
} from 'react-native'

import { BaseStyles } from '../../../../constant'
import CardOrder from '../../../global/CardOrder'
import InputBox from '../../../global/InputBox'
import { StandardButton } from '../../../global/CustomButton'

import ketchup from '../../../../assets/images/ketchup.png'

class CartTotalContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: [
        {
          title: 'Subtotal',
          desc: '520 LKR'
        },
        {
          title: 'Delivery Charge',
          desc: '50 LKR'
        },
        {
          title: 'Promo Code Discount (10%)',
          desc: '57 LKR'
        }
      ]
    }
  }

  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {this.renderReviewConfirm()}
        {this.renderTotalCost()}
        {this.renderAddress()}
        {this.renderSummary()}
      </ScrollView>
    )
  }

  renderReviewConfirm = () => {
    const { reviews } = this.state
    return (
      <View style={styles['review-confirm']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--white'],
            BaseStyles['text--bold']
          ]}
        >
          Review & Confirm
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange'],
            BaseStyles['text--right']
          ]}
        >
          Summary
        </Text>
        <FlatList
          data={reviews}
          keyExtractor={(item, index) => item + index.toString()}
          contentContainerStyle={{ marginTop: 5 }}
          renderItem={this.renderReviewConfirmItem}
        />
      </View>
    )
  }

  renderReviewConfirmItem = ({ item }) => {
    return (
      <View style={styles['review-confirm__item']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange']
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--white']
          ]}
        >
          {item.desc}
        </Text>
      </View>
    )
  }

  renderTotalCost = () => {
    return (
      <View style={styles['total-cost']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange']
          ]}
        >
          Total
        </Text>

        <View>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--3xl'],
              BaseStyles['text--white'],
              BaseStyles['text--bold'],
              BaseStyles['text--right']
            ]}
          >
            513 LKR
          </Text>

          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--white']
            ]}
          >
            Total (includes VAT)
          </Text>
        </View>
      </View>
    )
  }

  renderAddress = () => {
    return (
      <View style={styles['address']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--white'],
            BaseStyles['text--bold']
          ]}
        >
          Delivering by
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange'],
            { marginTop: 10 }
          ]}
        >
          19 / 09 / 2018  06:50:00 PM
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--white'],
            { marginTop: 5 }
          ]}
        >
          No. 02, 6th Lane, Colombo 03
        </Text>
      </View>
    )
  }

  renderSummary = () => {
    return (
      <View style={styles['summary']}>
        {this.renderRemarks()}
        {this.renderCardOrder()}
        {this.renderBeverages()}
        {this.renderConfirmButton()}
      </View>
    )
  }

  renderRemarks = () => {
    return (
      <View style={styles['remarks']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Remarks
        </Text>

        <InputBox
          placeholder='E.g More ketchup; more drinking straws'
          containerStyle={{ marginTop: 10 }}
        />
      </View>
    )
  }

  renderCardOrder = () => {
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
        containerStyle={{
          marginTop: 15
        }}
      />
    )
  }

  renderBeverages = () => {
    return (
      <View style={styles['beverages']}>
        <Image
          source={ketchup}
        />
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            { marginLeft: 15 }
          ]}
        >
          2 Ketchup packets
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange'],
            { marginLeft: 'auto' }
          ]}
        >
          20 LKR
        </Text>
      </View>
    )
  }

  renderConfirmButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Confirm'
        buttonStyle={{ marginTop: 30 }}
        onPress={onProceed}
      />
    )
  }
}

CartTotalContent.propTypes = {
  onProceed: PropTypes.func
}

export default CartTotalContent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  'review-confirm': {
    backgroundColor: '#1F2126',
    padding: 20
  },
  'review-confirm__item': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8
  },
  'total-cost': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#11191E',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  address: {
    backgroundColor: '#1C272E',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
    marginTop: 15
  },
  summary: {
    padding: 20
  },
  beverages: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 15
  }
})
