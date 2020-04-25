import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Image,
  YellowBox,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import InputBox from '../../components/InputBox'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'

class ForgotPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
    }

    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  render () {
    return (
      <View>
        {this.renderStatusBar()}
        {this.renderBackground()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    )
  }

  renderBackground = () => {
    return (
      <ImageBackground source={bgImage} style={styles.onboarding__bg}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderLead()}
        {this.renderForm()}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return <View style={styles.onboarding__overlay} />
  }

  renderLogo = () => {
    return (
      <View style={styles.onboarding__logo}>
        <Image source={bcLogo} />
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
          Forgot password
        </Text>
        <Text style={styles['onboarding__lead--p']}>
          Please enter a new password and confirm the password
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__form']}>
        {this.renderInputBox()}
        {this.renderSubmitButton()}
      </View>
    )
  }

  renderInputBox = () => {
    const inputBoxArr = [
      {
        placeholder: 'Email Address',
        icon: {
          type: EvilIcons,
          name: 'envelope',
          color: '#727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: {}
      },
      {
        placeholder: 'New Password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '#727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: { marginTop: 17 }
      },
      {
        placeholder: 'Confirm Password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '#727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        },
        containerStyle: { marginTop: 17 }
      }
    ]

    return (
      <FlatList
        data={inputBoxArr}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item, index }) => (
          <InputBox password={index === 1} {...item} />
        )}
      />
    )
  }

  renderSubmitButton = () => {
    return (
      <TouchableHighlight
        onPress={() => {}}
        underlayColor="#ED941A"
        style={styles['onboarding__button']}
      >
        <Text style={styles['onboarding__button__text']}>
          Submit
        </Text>
      </TouchableHighlight>
    )
  }
}

ForgotPasswordScreen.propTypes = {
  navigation: PropTypes.object
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  onboarding__bg: {
    height: '100%',
    width: '100%'
  },
  onboarding__overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  onboarding__logo: {
    alignItems: 'center',
    marginTop: 70
  },
  onboarding__lead: {
    alignItems: 'center',
    marginTop: 40
  },
  'onboarding__lead--h1': {
    fontFamily: 'Nunito-Bold',
    fontSize: 25,
    color: '#ffffff',
    includeFontPadding: false
  },
  'onboarding__lead--p': {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: '#ffffff',
    includeFontPadding: false,
    textAlign: 'center',
    width: 250,
    marginTop: 3
  },
  onboarding__form: {
    paddingHorizontal: 25,
    marginTop: 35
  },
  onboarding__input__icon: {
    marginRight: 10,
    marginLeft: 20
  },
  onboarding__button: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#ff9f1c',
    paddingVertical: 15,
    marginTop: 50
  },
  onboarding__button__text: {
    fontFamily: 'Nunito-Black',
    fontSize: 16,
    color: '#ffffff',
    includeFontPadding: false
  }
})
