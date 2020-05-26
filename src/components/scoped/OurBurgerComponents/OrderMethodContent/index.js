import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSelectOrderMethod } from '../../../../redux/actions/ourBurgers'

import { StandardButton, IconButton } from '../../../global/CustomButton'
import { BaseStyles } from '../../../../constant'

class OrderMethodContent extends Component {
  render () {
    return (
      <View style={styles['content']}>
        {this.renderOrderMethod()}
        {this.renderMethodList()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderOrderMethod = () => {
    return (
      <View style={styles['order-method']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Order Method
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
          Please select your order method
        </Text>
      </View>
    )
  }

  renderMethodList = () => {
    const { orderMethod, onSelectOrderMethod } = this.props

    return (
      <FlatList
        data={orderMethod}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['order-method__list']}
        renderItem={({ item, index }) => {
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
              onPress={() => onSelectOrderMethod(index)}
            />
          )
        }}
      />
    )
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

OrderMethodContent.propTypes = {
  onProceed: PropTypes.func,
  orderMethod: PropTypes.array,
  onSelectOrderMethod: PropTypes.func
}

const mapStateToProps = (state) => {
  const { orderMethod } = state.ourBurgers
  return { orderMethod }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onSelectOrderMethod }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderMethodContent)

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  'order-method': {
    paddingHorizontal: 20,
    paddingTop: 25
  },
  'order-method__list': {
    paddingHorizontal: 20
  },
  'order-method__button': {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  proceed__button: {
    marginTop: 'auto',
    marginHorizontal: 20,
    marginBottom: 30
  }
})
