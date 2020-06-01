import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

import logo from '../../../assets/icons/logo.png'

const Header = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles['header']}>
      <StatusBar
        translucent
        animated
        barStyle='dark-content'
        backgroundColor='transparent'
      />
      <LeftButton
        withBack={props.withBack}
        onPressLeftButton={props.onPressLeftButton}
      />

      <View style={styles['logo']}>
        <Image
          source={logo}
          resizeMode='contain'
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('TrolleyScreen')}
        style={styles['btn']}
      >
        <FontAwesome
          name='shopping-cart'
          color='#ff9f1c'
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}

const LeftButton = ({ withBack, onPressLeftButton }) => {
  let button = (
    <View style={styles['lang__btn']}>
      <Text style={styles['text']}>
        EN
      </Text>
      <Feather
        name='chevron-down'
        color='#ff9f1c'
        size={20}
        style={{ marginLeft: 2 }}
      />
    </View>
  )

  if (withBack) {
    button = (
      <Feather
        name='chevron-left'
        color='#ff9f1c'
        size={28}
        style={{
          marginLeft: -5,
          marginVertical: -10
        }}
      />
    )
  }

  return (
    <TouchableOpacity
      onPress={onPressLeftButton}
      style={styles['btn']}
    >
      {button}
    </TouchableOpacity>
  )
}

Header.propTypes = {
  withBack: PropTypes.bool,
  onPressLeftButton: PropTypes.func
}

LeftButton.propTypes = {
  withBack: PropTypes.bool,
  onPressLeftButton: PropTypes.func
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: 30
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  lang__btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    position: 'absolute',
    top: 30,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#ff9f1c',
    includeFontPadding: false
  }
})
