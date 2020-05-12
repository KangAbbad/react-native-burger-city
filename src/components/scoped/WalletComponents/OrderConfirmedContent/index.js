import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native'
import Modal from 'react-native-modal'

import { BaseStyles } from '../../../../constant'
import { StandardButton } from '../../../global/CustomButton'

import cocaCola from '../../../../assets/images/coca-cola.png'

class OrderConfirmedContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.isModalVisible !== prevState.isModalVisible) {
      if (this.state.isModalVisible) {
        setTimeout(() => {
          StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.7)', true)
        }, 10)
      } else {
        setTimeout(() => {
          StatusBar.setBackgroundColor('transparent', true)
        }, 10)
      }
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderDetailConfirmation()}
        {this.renderAddress()}
        {this.renderMessage()}
        {this.renderButton()}
        {this.renderBonusModal()}
      </View>
    )
  }

  renderDetailConfirmation = () => {
    return (
      <View style={styles['detail-confirmation']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--white'],
            BaseStyles['text--bold']
          ]}
        >
          Order Confirmed!
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange'],
            { marginTop: 10 }
          ]}
        >
          Pay by M Wallet
        </Text>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--white'],
            { marginTop: 5 }
          ]}
        >
          33701 - 18 / 09 / 2018 - 429
        </Text>
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

  renderMessage = () => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--xl'],
          BaseStyles['text--black'],
          {
            padding: 20
          }
        ]}
      >
        We have sent you an email confirmation of
        your order
      </Text>
    )
  }

  renderButton = () => {
    return (
      <View style={styles['wrapper__button']}>
        {this.renderTrackButton()}
        {this.renderFavouriteButton()}
      </View>
    )
  }

  renderTrackButton = () => {
    return (
      <StandardButton
        titleButton='Track Your Order'
        onPress={this.onTrack}
        buttonStyle={{ flex: 1 }}
      />
    )
  }

  onTrack = () => {
    this.props.navigation.navigate('FavouriteScreen')
  }

  renderFavouriteButton = () => {
    return (
      <StandardButton
        underlayColor='rgba(0, 0, 0, 0.75)'
        titleButton='Favourite This Order'
        onPress={this.onToggleModal}
        buttonStyle={{
          flex: 1,
          backgroundColor: '#1F2126',
          marginLeft: 10
        }}
      />
    )
  }

  onToggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible
    }))
  }

  renderBonusModal = () => {
    const { isModalVisible } = this.state
    return (
      <Modal
        isVisible={isModalVisible}
        useNativeDriver
        onBackdropPress={this.onToggleModal}
      >
        <View style={styles['bonus__modal']}>
          <View style={styles['bonus__image__wrapper']}>
            <Image
              source={cocaCola}
              style={styles['bonus__image']}
            />
          </View>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--xl'],
              BaseStyles['text--bold'],
              BaseStyles['text--center']
            ]}
          >
            Congratulation!
          </Text>
          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--xl'],
              BaseStyles['text--center'],
              {
                paddingHorizontal: 20,
                marginTop: 15
              }
            ]}
          >
            Thanks for your payment! You have won a FREE Coca-Cola.
          </Text>
          <StandardButton
            titleButton='OK'
            buttonStyle={{
              marginTop: 20,
              width: 130,
              alignSelf: 'center'
            }}
            onPress={this.onToggleModal}
          />
        </View>
      </Modal>
    )
  }
}

OrderConfirmedContent.propTypes = {
  navigation: PropTypes.object
}

export default OrderConfirmedContent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  'detail-confirmation': {
    backgroundColor: '#1D2126',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  address: {
    backgroundColor: '#1C272E',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12
  },
  wrapper__button: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 'auto'
  },
  bonus__modal: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 20
  },
  bonus__image__wrapper: {
    borderRadius: 130,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 130,
    width: 130,
    backgroundColor: '#FFFFFF',
    marginTop: -50,
    marginBottom: 10
  },
  bonus__image: {
    height: 100,
    width: 60,
    marginBottom: -25
  }
})
