import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const StandardButton = (props) => {
  const { titleButton, disabled, buttonStyle, titleStyle } = props
  const wrapperStyle = disabled
    ? [
      styles['button'],
      styles['button--inactive'],
      buttonStyle
    ]
    : [
      styles['button'],
      styles['button--active'],
      buttonStyle
    ]
  const textStyle = disabled
    ? [
      styles['text'],
      styles['text--inactive'],
      titleStyle
    ]
    : [
      styles['text'],
      styles['text--active'],
      titleStyle
    ]

  return (
    <TouchableHighlight
      underlayColor='#ED941A'
      style={wrapperStyle}
      {...props}
    >
      <Text style={textStyle}>
        {titleButton}
      </Text>
    </TouchableHighlight>
  )
}

StandardButton.propTypes = {
  disabled: PropTypes.bool,
  titleButton: PropTypes.string,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  titleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

StandardButton.defaultProps = {
  disabled: false,
  titleButton: 'Standard Button',
  buttonStyle: {},
  titleStyle: {}
}

export default StandardButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14
  },
  'button--active': {
    backgroundColor: '#FF9F1C'
  },
  'button--inactive': {
    borderWidth: 1,
    borderColor: '#FF9F1C',
    backgroundColor: 'transparent'
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    includeFontPadding: false
  },
  'text--active': {
    color: '#FFFFFF'
  },
  'text--inactive': {
    color: '#FF9F1C'
  }
})
