import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'

const InputBox = (props) => {
  const inputStyle = [
    styles['input-box'],
    props.icon === null && {
      paddingLeft: 20
    }
  ]

  const onChangeText = (value) => {
    if (props.onHandleInput) {
      props.onHandleInput(props.name, value)
    }
  }

  return (
    <View
      style={[
        props.containerStyle,
        styles['container']
      ]}
    >
      <IconInput icon={props.icon} />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor='#727c8e'
        secureTextEntry={props.password}
        value={props.value}
        style={inputStyle}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const IconInput = ({ icon }) => {
  if (icon) {
    return (
      <icon.type
        name={icon.name}
        color={icon.color}
        size={icon.size}
        style={icon.style}
      />
    )
  }

  return null
}

InputBox.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  password: PropTypes.bool,
  value: PropTypes.string,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onHandleInput: PropTypes.func
}

IconInput.propTypes = {
  icon: PropTypes.object
}

InputBox.defaultProps = {
  containerStyle: {},
  icon: null,
  placeholder: 'Custom input box',
  password: false,
  value: '',
  onHandleInput: null
}

export default InputBox

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  'input-box': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727C8E',
    paddingRight: 30
  }
})
