import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { IconButton } from '../../components/global/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../components/global/Header'

import chickenBigBurger from '../../assets/images/chicken-big-burger.png'
import chickenSpicyBurger from '../../assets/images/chicken-spicy-burger.png'
import beefBurger from '../../assets/images/beef-burger.png'
import cheesyBurger from '../../assets/images/cheesy-burger.png'

class FavoriteScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      burgers: [
        {
          icon: chickenBigBurger,
          name: 'Chicken Big Burger',
          price: 380
        },
        {
          icon: chickenSpicyBurger,
          name: 'Chicken Spicy Burger',
          price: 320
        },
        {
          icon: beefBurger,
          name: 'Beef Burger',
          price: 420
        },
        {
          icon: cheesyBurger,
          name: 'Cheesy Burger',
          price: 290
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderHeader()}
        {this.renderBurger()}
      </View>
    )
  }

  renderHeader = () => {
    return <Header />
  }

  renderBurger = () => {
    const { burgers } = this.state
    return (
      <FlatList
        data={burgers}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderBurgerItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10
        }}
      />
    )
  }

  renderBurgerItem = ({ item }) => {
    return (
      <IconButton
        avatarButton={
          <Image
            source={item.icon}
            style={{
              height: 40,
              width: 50,
              marginLeft: -3
            }}
          />
        }
        titleButton={item.name}
        subtitleButton={`${item.price} LKR`}
        buttonStyle={{ marginTop: 15 }}
        iconRight={
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={20}
            color='#E3E5E8'
          />
        }
      />
    )
  }
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
