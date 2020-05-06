import { StyleSheet } from 'react-native'

export const BaseStyles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Regular',
    includeFontPadding: false
  },
  'text--black': {
    color: '#1D2126'
  },
  'text--white': {
    color: '#FFFFFF'
  },
  'text--bold': {
    fontFamily: 'Nunito-Bold'
  },
  'text--semibold': {
    fontFamily: 'Nunito-SemiBold'
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
  }
})
