import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onRemoveTrolley } from '../../../../redux/actions/home'

import { BaseStyles } from '../../../../constant'
import Stepper from '../../../global/Stepper'
import { StandardButton } from '../../../global/CustomButton'

class TrolleyContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      remakeTrolley: props.trolley
    }
  }

  render () {
    const { remakeTrolley } = this.state
    if (remakeTrolley.length) {
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
          Your Order
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
    const { remakeTrolley } = this.state
    return (
      <FlatList
        data={remakeTrolley}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        contentContainerStyle={styles['order-list']}
        renderItem={this.renderOrderListItem}
        ListFooterComponent={this.renderOrderDetail()}
      />
    )
  }

  renderOrderListItem = ({ item, index }) => {
    return (
      <View style={styles['order-list__item']}>
        <Image
          source={{ uri: item.imageUrl }}
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
              {item.name}
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
              ${item.price.toString()}
            </Text>
          </View>

          <View style={styles['order-list__item__action']}>
            <TouchableOpacity
              onPress={() => {
                this.onRemoveItem(index)
              }}
            >
              <MaterialCommunityIcons
                name='delete-circle'
                size={28}
                color='#CECECE'
              />
            </TouchableOpacity>

            <Stepper
              count={item.countNumber}
              containerStyle={styles['order-list__stepper']}
              onCount={(number) => this.onCountItem(number, index)}
            />
          </View>
        </View>
      </View>
    )
  }

  onCountItem = (newCountNumber, index) => {
    const { remakeTrolley } = this.state
    const newRemakeTrolley = []

    remakeTrolley.forEach((item, i) => {
      newRemakeTrolley.push(item)

      if (index === i) {
        newRemakeTrolley[index].countNumber = newCountNumber
      } else {
        newRemakeTrolley[i].countNumber = item.countNumber
      }
    })

    this.setState({ remakeTrolley: newRemakeTrolley })
  }

  onRemoveItem = (index) => {
    const { remakeTrolley } = this.state
    const { onRemoveTrolley } = this.props

    remakeTrolley.splice(index, 1)

    this.setState({ remakeTrolley }, () => {
      onRemoveTrolley(index)
    })
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
  onPickupTime: PropTypes.func,
  trolley: PropTypes.array,
  onRemoveTrolley: PropTypes.func
}

const mapStateToProps = (state) => {
  const { trolley } = state.home
  return { trolley }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onRemoveTrolley }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrolleyContent)

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
  'order-list__item__action': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  'order-list__stepper': {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    width: 100
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
