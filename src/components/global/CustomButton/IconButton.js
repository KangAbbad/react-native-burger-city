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
    iconRight,
    subtitleRight,
    buttonStyle,
    subtitleStyle,
    disabled,
    onPress
  } = props

  const wrapperStyle = buttonStyle
    ? [styles['button'], buttonStyle]
    : styles['button']

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <View style={wrapperStyle}>
        <LeftSection
          avatarButton={avatarButton}
        />
        <MiddleSection
          titleButton={titleButton}
          subtitleButton={subtitleButton}
          subtitleStyle={subtitleStyle}
        />
        <RightSection
          iconRight={iconRight}
          subtitleRight={subtitleRight}
        />
      </View>
    </TouchableOpacity>
  )
}

const LeftSection = ({ avatarButton }) => {
  if (avatarButton) {
    return (
      <View style={styles['section--left']}>
        {avatarButton}
      </View>
    )
  }

  return null
}

const MiddleSection = ({ titleButton, subtitleButton, subtitleStyle }) => {
  return (
    <View>
      <Title titleButton={titleButton} />
      <Subtitle
        subtitleButton={subtitleButton}
        subtitleStyle={subtitleStyle}
      />
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

const Subtitle = ({ subtitleButton, subtitleStyle }) => {
  if (subtitleButton) {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--medium'],
          BaseStyles['text--semibold'],
          BaseStyles['text--orange'],
          subtitleStyle,
          { marginTop: 3 }
        ]}
      >
        {subtitleButton}
      </Text>
    )
  }

  return null
}

const RightSection = ({ iconRight, subtitleRight }) => {
  return (
    <View style={styles['section--right']}>
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--medium'],
          BaseStyles['text--orange'],
          BaseStyles['text--bold'],
          { marginRight: 10 }
        ]}
      >
        {subtitleRight}
      </Text>
      {iconRight}
    </View>
  )
}

IconButton.propTypes = {
  avatarButton: PropTypes.object,
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string,
  iconRight: PropTypes.element,
  subtitleRight: PropTypes.string,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  subtitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  disabled: PropTypes.bool,
  onPress: PropTypes.func
}

LeftSection.propTypes = {
  avatarButton: PropTypes.object
}

MiddleSection.propTypes = {
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string,
  subtitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Title.propTypes = {
  titleButton: PropTypes.string
}

Subtitle.propTypes = {
  subtitleButton: PropTypes.string,
  subtitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

RightSection.propTypes = {
  iconRight: PropTypes.object,
  subtitleRight: PropTypes.string
}

IconButton.defaultProps = {
  titleButton: 'Icon Button',
  iconRight: (
    <MaterialCommunityIcons
      name='xml'
      size={18}
      color='#FF9F1C'
    />
  ),
  buttonStyle: {},
  disabled: false,
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
    maxWidth: 60,
    marginRight: 20
  },
  'section--right': {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  }
})
