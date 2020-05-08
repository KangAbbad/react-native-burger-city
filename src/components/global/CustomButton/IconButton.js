import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyles } from '../../../constant'

const IconButton = (props) => {
  const {
    avatarButton,
    titleButton,
    subtitleButton,
    iconButton,
    buttonStyle,
    onPress
  } = props

  const wrapperStyle = buttonStyle
    ? [styles['button'], buttonStyle]
    : styles['button']

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={wrapperStyle}>
        <LeftSection
          avatarButton={avatarButton}
        />
        <MiddleSection
          titleButton={titleButton}
          subtitleButton={subtitleButton}
        />
        <RightSection
          iconButton={iconButton}
        />
      </View>
    </TouchableOpacity>
  )
}

const LeftSection = ({ avatarButton }) => {
  return (
    <View style={styles['section--left']}>
      {avatarButton}
    </View>
  )
}

const MiddleSection = ({ titleButton, subtitleButton }) => {
  return (
    <View style={{ marginLeft: 20 }}>
      <Title titleButton={titleButton} />
      <Subtitle subtitleButton={subtitleButton} />
    </View>
  )
}

const Title = ({ titleButton }) => {
  return (
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
  )
}

const Subtitle = ({ subtitleButton }) => {
  if (subtitleButton) {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--medium'],
          BaseStyles['text--semibold'],
          BaseStyles['text--orange'],
          { marginTop: 3 }
        ]}
      >
        {subtitleButton}
      </Text>
    )
  }

  return null
}

const RightSection = ({ iconButton }) => {
  return (
    <View style={{ marginLeft: 'auto' }}>
      {iconButton}
    </View>
  )
}

IconButton.propTypes = {
  avatarButton: PropTypes.object,
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string,
  iconButton: PropTypes.element,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onPress: PropTypes.func
}

LeftSection.propTypes = {
  avatarButton: PropTypes.object
}

MiddleSection.propTypes = {
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string
}

Title.propTypes = {
  titleButton: PropTypes.string
}

Subtitle.propTypes = {
  subtitleButton: PropTypes.string
}

RightSection.propTypes = {
  iconButton: PropTypes.object
}

IconButton.defaultProps = {
  titleButton: 'Icon Button',
  iconButton: (
    <MaterialCommunityIcons
      name='xml'
      size={18}
      color='#FF9F1C'
    />
  ),
  buttonStyle: {},
  onPress: () => {}
}

export default IconButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  'section--left': {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 60,
    maxWidth: 60
  }
})
