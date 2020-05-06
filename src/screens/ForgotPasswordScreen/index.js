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
  FlatList
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import InputBox from '../../components/global/InputBox'
import { StandardButton } from '../../components/global/CustomButton'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'

class ForgotPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        newPassword: '',
        confirmPassword: '',
        phone: '',
        otp: ''
      },
      identifier: 'create-new-password'
    }

    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  onHandleInput = (key, value) => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key]: value
      }
    }))
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
        barStyle='light-content'
        backgroundColor='transparent'
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
    const { identifier } = this.state
    const sublead = identifier === 'create-new-password'
      ? 'Please enter a new password and confirm the password'
      : identifier === 'insert-otp'
        ? 'For your security, a one time password has been sent to your email address. Please enter it below to continue.'
        : 'Custom Subtitle'

    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
          Forgot password
        </Text>
        <Text style={styles['onboarding__lead--p']}>
          {sublead}
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
    const { identifier } = this.state

    const formInputNewPassword = [
      {
        name: 'email',
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
        name: 'newPassword',
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
        name: 'confirmPassword',
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

    const formInputOTP = [
      {
        name: 'otp',
        placeholder: 'OTP',
        icon: {
          type: FontAwesome5,
          name: 'clipboard-check',
          color: '#727c8e',
          size: 18,
          style: [
            styles['onboarding__input__icon'],
            { marginTop: -2 }
          ]
        },
        containerStyle: {}
      }
    ]

    const inputBox = identifier === 'create-new-password'
      ? formInputNewPassword
      : identifier === 'insert-otp'
        ? formInputOTP
        : []

    return (
      <FlatList
        data={inputBox}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item, index }) => (
          <InputBox
            password={index > 0}
            onHandleInput={this.onHandleInput}
            {...item}
          />
        )}
      />
    )
  }

  renderSubmitButton = () => {
    const { data, identifier } = this.state
    const disabled = !data.email || !data.newPassword || !data.confirmPassword
    const titleButton = identifier === 'create-new-password'
      ? 'Submit'
      : identifier === 'insert-otp'
        ? 'Proceed'
        : 'Custom Button'

    return (
      <StandardButton
        disabled={disabled}
        titleButton={titleButton}
        onPress={this.onSubmit}
        buttonStyle={{ marginTop: 50 }}
      />
    )
  }

  onSubmit = () => {
    const { identifier } = this.state
    if (identifier === 'create-new-password') {
      this.setState({ identifier: 'insert-otp' })
    }
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
    fontSize: 16,
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
  }
})
