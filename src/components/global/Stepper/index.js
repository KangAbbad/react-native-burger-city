import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import { BaseStyles } from '../../../constant'

class Stepper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countNumber: 1
    }
  }

  render () {
    const { countNumber } = this.state
    const { containerStyle, buttonStyle } = this.props
    const wrapperStyle = [
      styles['container'],
      containerStyle
    ]

    return (
      <View style={wrapperStyle}>
        <TouchableOpacity
          onPress={this.countDown}
          style={{ padding: 10 }}
        >
          <View
            style={[
              styles['button'],
              buttonStyle
            ]}
          >
            <Entypo
              name='minus'
              size={16}
              color={buttonStyle && buttonStyle.color ? buttonStyle.color : '#727C8E'}
            />
          </View>
        </TouchableOpacity>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            containerStyle.color && {
              color: containerStyle.color
            },
            containerStyle.fontSize && {
              fontSize: containerStyle.fontSize
            }
          ]}
        >
          {countNumber}
        </Text>

        <TouchableOpacity
          onPress={this.countUp}
          style={{ padding: 10 }}
        >
          <View
            style={[
              styles['button'],
              buttonStyle
            ]}
          >
            <Entypo
              name='plus'
              size={16}
              color={buttonStyle && buttonStyle.color ? buttonStyle.color : '#727C8E'}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  countUp = () => {
    this.setState(prevState => ({
      countNumber: prevState.countNumber + 1
    }), () => {
      const { counter } = this.props
      if (counter) {
        counter(this.state.countNumber)
      }
    })

    // const plus = prevState => ({
    //   countNumber: prevState.countNumber + 1
    // })
    // const callback = () => {
    //   const { counter } = this.props
    //   counter(this.state.countNumber)
    // }
    // this.setState(plus, callback)
  }

  countDown = () => {
    // const { countNumber } = this.state
    // let newCountNumber = 1
    // if (countNumber > 1) {
    //   newCountNumber = countNumber - 1
    // }
    // this.setState({ countNumber: newCountNumber })
    this.setState(prevState => {
      if (prevState.countNumber > 1) {
        return {
          countNumber: prevState.countNumber - 1
        }
      }
    }, () => {
      const { counter } = this.props
      if (counter) {
        counter(this.state.countNumber)
      }
    })
  }
}

Stepper.propTypes = {
  counter: PropTypes.func,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Stepper.defaultProps = {
  counter: () => {},
  containerStyle: {},
  buttonStyle: {}
}

export default Stepper

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 110,
    backgroundColor: '#FFFFFF'
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#E3E5E8'
  }
})
