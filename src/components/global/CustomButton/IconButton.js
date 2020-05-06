import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyles } from '../../../constant'

const IconButton = (props) => {
  const { onPress, titleButton, iconButton, buttonStyle } = props
  const wrapperStyle = buttonStyle
    ? [styles['button'], buttonStyle]
    : styles['button']
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={wrapperStyle}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--semibold'],
            BaseStyles['text--black']
          ]}
        >
          {titleButton}
        </Text>

        {iconButton}
      </View>
    </TouchableOpacity>
  )
}

IconButton.propTypes = {
  onPress: PropTypes.func,
  titleButton: PropTypes.string,
  iconButton: PropTypes.element,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

IconButton.defaultProps = {
  onPress: () => {},
  titleButton: 'Icon Button',
  iconButton: (
    <MaterialCommunityIcons
      name='xml'
      size={18}
      color='#FF9F1C'
    />
  ),
  buttonStyle: {}
}

export default IconButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  }
})
