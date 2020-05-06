import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class FavoriteScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        <Text>
          Favourite
        </Text>
      </View>
    )
  }
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
