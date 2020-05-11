import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyles } from '../../../../constant'
import { IconButton, StandardButton } from '../../../global/CustomButton'

class ChoicesDishContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choices: [
        {
          name: 'Homestyle Fries',
          isActive: false
        },
        {
          name: 'Medium Fries',
          isActive: true
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderLead()}
        {this.renderChoices()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <View>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Choices
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--l'],
            BaseStyles['text--black'],
            BaseStyles['text--semibold'],
            { marginTop: 5 }
          ]}
        >
          Please select your choices
        </Text>
      </View>
    )
  }

  renderChoices = () => {
    const { choices } = this.state

    return (
      <FlatList
        data={choices}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderChoicesItem}
      />
    )
  }

  renderChoicesItem = ({ item, index }) => {
    const checkColor = item.isActive ? '#FF9F1C' : '#E3E5E8'
    return (
      <IconButton
        titleButton={item.name}
        iconRight={
          <MaterialCommunityIcons
            name='check-circle'
            color={checkColor}
            size={18}
          />
        }
        buttonStyle={{ marginTop: 20 }}
        onPress={() => this.onPressChoices(index)}
      />
    )
  }

  onPressChoices = (index) => {
    const { choices } = this.state
    const newChoices = []

    choices.map((item, i) => {
      newChoices.push(item)

      if (index === i) {
        newChoices[index].isActive = true
      } else {
        newChoices[i].isActive = false
      }
    })

    this.setState({ choices: newChoices })
  }

  renderProceedButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Proceed to Order'
        buttonStyle={styles['proceed__button']}
        onPress={onProceed}
      />
    )
  }
}

ChoicesDishContent.propTypes = {
  onProceed: PropTypes.func
}

export default ChoicesDishContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
