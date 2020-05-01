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

import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'

class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        password: '',
        confirmPassword: ''
      }
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
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
          Welcome to Burger City!
        </Text>
        <Text style={styles['onboarding__lead--p']}>
          Sign up to continue
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
        name: 'password',
        placeholder: 'Password',
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

    return (
      <FlatList
        data={inputBoxArr}
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
    const { data } = this.state
    const disabled = !data.email || !data.password || !data.confirmPassword

    return (
      <CustomButton
        titleButton='Sign Up'
        disabled={disabled}
        onPress={() => {}}
      />
    )
  }
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object
}

export default SignUpScreen

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
