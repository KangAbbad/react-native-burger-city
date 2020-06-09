import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, FlatList, Image, Text } from 'react-native'
import { IconButton } from '../../components/global/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSelectItem } from '../../redux/actions/home'

import { BaseStyles } from '../../constant'
import Header from '../../components/global/Header'

class FavoriteScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderHeader()}
        {this.renderBurger()}
      </View>
    )
  }

  componentDidMount () {
    console.log(this.props.favourites)
  }

  renderHeader = () => {
    return <Header />
  }

  renderBurger = () => {
    const { favourites } = this.props
    if (favourites.length) {
      return (
        <FlatList
          data={favourites}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={this.renderBurgerItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )
    } else {
      return this.renderEmptyFavourite()
    }
  }

  renderBurgerItem = ({ item }) => {
    const { navigation, onSelectItem } = this.props
    return (
      <IconButton
        avatarButton={
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              borderRadius: 50,
              height: 50,
              width: 50
            }}
          />
        }
        titleButton={item.name}
        subtitleButton={`$${item.price.toString()}`}
        buttonStyle={{
          marginTop: 20,
          marginHorizontal: 20
        }}
        iconRight={
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={20}
            color='#E3E5E8'
          />
        }
        onPress={() => {
          onSelectItem(item)
          navigation.navigate('FoodDetailScreen', {
            showDeleteItem: true
          })
        }}
      />
    )
  }

  renderEmptyFavourite = () => {
    return (
      <View style={styles['empty-favourite']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xxl'],
            BaseStyles['text--black']
          ]}
        >
          Let's find your favourite Burger!
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--gray'],
            { marginTop: 3 }
          ]}
        >
          Order and choose as your favourite!
        </Text>
      </View>
    )
  }
}

FavoriteScreen.propTypes = {
  navigation: PropTypes.object,
  favourites: PropTypes.array,
  onSelectItem: PropTypes.func
}

const mapStateToProps = (state) => {
  const { favourites } = state.home
  return { favourites }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onSelectItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  'empty-favourite': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
})
