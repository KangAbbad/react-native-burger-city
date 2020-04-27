import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'

const InputBox = (props) => {
  return (
    <View
      style={[
        props.containerStyle,
        styles['container']
      ]}
    >
      <props.icon.type
        name={props.icon.name}
        color={props.icon.color}
        size={props.icon.size}
        style={props.icon.style}
      />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor='#727c8e'
        secureTextEntry={props.password}
        style={styles['input-box']}
        onChangeText={(value) => props.onHandleInput(props.name, value)}
      />
    </View>
  )
}

InputBox.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  password: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onHandleInput: PropTypes.func
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
    color: '#727c8e',
    // includeFontPadding: false,
    paddingRight: 30
  }
})
