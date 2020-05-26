import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'

import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { onSwitchMenu } from '../../../../redux/actions/ourBurgers'

import { BaseStyles } from '../../../../constant'
import { StandardButton } from '../../../global/CustomButton'

class MenuContent extends Component {
  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        {this.renderInfo()}
        {this.renderMenuWrapper()}
        {this.renderSecretMenu()}
      </ScrollView>
    )
  }

  renderInfo = () => {
    const data = [
      {
        title: 'Delivery Address',
        desc: 'No. 02, 6th Lane, Colombo 03'
      },
      {
        title: 'Delivery Date & Time',
        desc: '19 / 09 / 2018  06:50:00 PM'
      }
    ]

    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderDeckInfo}
      />
    )
  }

  renderDeckInfo = ({ item }) => {
    return (
      <View style={styles['deck-info']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--white'],
            BaseStyles['text--bold']
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--orange'],
            BaseStyles['text--bold']
          ]}
        >
          {item.desc}
        </Text>
      </View>
    )
  }

  renderMenuWrapper = () => {
    const { menuCategories } = this.props
    return (
      <FlatList
        data={menuCategories}
        numColumns={2}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderMenuItem}
        columnWrapperStyle={{ justifyContent: 'center' }}
        contentContainerStyle={{ padding: 10 }}
      />
    )
  }

  renderMenuItem = ({ item }) => {
    const { onSwitchMenu } = this.props
    return (
      <TouchableOpacity
        onPress={() => onSwitchMenu(item.name)}
        style={styles['menu__button']}
      >
        <View style={styles['menu']}>
          <Image
            source={item.icon}
            resizeMode='cover'
            height={82}
            width={111}
          />

          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--large'],
              BaseStyles['text--black'],
              BaseStyles['text--bold'],
              {
                marginTop: 15,
                width: 75,
                textAlign: 'center'
              }
            ]}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSecretMenu = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Secret Menu'
        buttonStyle={{
          marginHorizontal: 20,
          margin: 20
        }}
        onPress={onProceed}
      />
    )
  }
}

MenuContent.propTypes = {
  onProceed: PropTypes.func,
  menuCategories: PropTypes.array,
  onSwitchMenu: PropTypes.func
}

const mapStateToProps = state => {
  const { menuCategories } = state.ourBurgers
  return { menuCategories }
}

// const mapDispatchToProps = dispatch => {
//   bindActionCreators({}, dispatch)
// }

export default connect(mapStateToProps, null)(MenuContent)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  'deck-info': {
    backgroundColor: '#1C272E',
    padding: 20
  },
  menu__button: {
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 15
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
