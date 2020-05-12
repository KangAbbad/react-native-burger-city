import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

import { BaseStyles } from '../../../../constant'
import Stepper from '../../../global/Stepper'
import { IconButton, StandardButton } from '../../../global/CustomButton'

class CondimentsContent extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderLead()}
        {this.renderButton()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <View>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Condiments
        </Text>

        <IconButton
          disabled
          titleButton='Ketchup packets'
          subtitleButton='10 LKR'
          buttonStyle={{
            marginTop: 15,
            paddingVertical: 13
          }}
          iconRight={
            <Stepper
              containerStyle={{ minWidth: 90 }}
            />
          }
        />

        <IconButton
          disabled
          titleButton='Fries packets'
          subtitleButton='30 LKR'
          buttonStyle={{
            marginTop: 10,
            paddingVertical: 13
          }}
          iconRight={
            <Stepper
              containerStyle={{ minWidth: 90 }}
            />
          }
        />
      </View>
    )
  }

  renderButton = () => {
    return (
      <View style={styles['wrapper__button']}>
        {this.renderResetButton()}
        {this.renderAddToCartButton()}
      </View>
    )
  }

  renderResetButton = () => {
    return (
      <StandardButton
        underlayColor='rgba(0, 0, 0, 0.75)'
        titleButton='Reset'
        buttonStyle={{
          backgroundColor: '#1F2126'
        }}
        onPress={() => {}}
      />
    )
  }

  renderAddToCartButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Add to Cart'
        buttonStyle={{ marginTop: 15 }}
        onPress={onProceed}
      />
    )
  }
}

CondimentsContent.propTypes = {
  onProceed: PropTypes.func
}

export default CondimentsContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  wrapper__button: {
    marginTop: 'auto'
  }
})
