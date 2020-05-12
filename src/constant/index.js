import { StyleSheet } from 'react-native'

export const BaseStyles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Regular',
    includeFontPadding: false
  },
  'text--black': {
    color: '#1D2126'
  },
  'text--gray': {
    color: '#727C8E'
  },
  'text--white': {
    color: '#FFFFFF'
  },
  'text--orange': {
    color: '#FF9F1C'
  },
  'text--extrabold': {
    fontFamily: 'Nunito-ExtraBold'
  },
  'text--bold': {
    fontFamily: 'Nunito-Bold'
  },
  'text--semibold': {
    fontFamily: 'Nunito-SemiBold'
  },

  'text--xs': {
    fontSize: 8
  },
  'text--small': {
    fontSize: 10
  },
  'text--medium': {
    fontSize: 12
  },
  'text--large': {
    fontSize: 14
  },
  'text--xl': {
    fontSize: 16
  },
  'text--xxl': {
    fontSize: 18
  },
  'text--3xl': {
    fontSize: 20
  },
  'text--giant': {
    fontSize: 45
  },

  'text--left': {
    textAlign: 'left'
  },
  'text--center': {
    textAlign: 'center'
  },
  'text--right': {
    textAlign: 'right'
  }
})
