import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, FlatList, StatusBar, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'
import { TouchableOpacity as RNGHTouchable } from 'react-native-gesture-handler'

import { BaseStyles } from '../../constant'
import Stepper from '../../components/global/Stepper'

class FoodDetailScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderMainSection()}
        {this.renderFooterSection()}
      </View>
    )
  }

  renderMainSection = () => {
    return (
      <FlatList
        data={[0]}
        keyExtractor={(item, index) => item + index.toString()}
        ListHeaderComponent={this.renderPoster()}
        renderItem={this.renderContent}
      />
    )
  }

  renderPoster = () => {
    const { navigation } = this.props
    return (
      <View>
        <StatusBar
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <ImageBackground
          source={{ uri: 'https://live.staticflickr.com/4025/4671819961_69e1d93f81_z.jpg' }}
          style={styles['poster']}
        >
          <View style={styles['poster__overlay']} />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles['back__button']}
          >
            <Feather
              name='chevron-left'
              color='#FF9F1C'
              size={28}
              style={{
                marginLeft: -5,
                marginVertical: -10
              }}
            />
          </TouchableOpacity>

          <View style={styles['rating']}>
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--3xl'],
                BaseStyles['text--bold'],
                BaseStyles['text--orange'],
                { marginRight: 10 }
              ]}
            >
              4.5
            </Text>
            <StarRating
              disabled
              maxStars={1}
              rating={1}
              starSize={15}
              fullStarColor='#FF9F1C'
              emptyStar='star'
              emptyStarColor='#cecece'
            />
          </View>

          <View style={styles['favourite__wrapper']}>
            <RNGHTouchable
              onPress={() => {}}
              style={styles['favourite__button']}
            >
              <MaterialIcons
                name='favorite'
                color='#FFFFFF'
                size={20}
              />
            </RNGHTouchable>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderContent = () => {
    return (
      <View style={styles['content']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--bold'],
            BaseStyles['text--black']
          ]}
        >
          Beef Burger
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            { marginTop: 20 }
          ]}
        >
          Officia esse cillum ullamco veniam fugiat elit anim in. Aliqua aliquip laboris elit laboris nisi et. Sit culpa exercitation nisi voluptate enim dolor cillum commodo esse reprehenderit reprehenderit id nostrud. Duis Lorem qui magna dolore mollit consectetur ullamco labore sit non voluptate sint elit eiusmod. Magna veniam laborum aliqua aliqua reprehenderit veniam laboris enim tempor non tempor adipisicing occaecat sunt.
        </Text>
      </View>
    )
  }

  renderFooterSection = () => {
    return (
      <View style={styles['footer']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--xxl'],
            BaseStyles['text--bold'],
            BaseStyles['text--white']
          ]}
        >
          $13
        </Text>

        <Stepper
          containerStyle={styles['stepper__container']}
          buttonStyle={styles['stepper__button']}
        />

        <TouchableOpacity
          onPress={() => {}}
          style={styles['add-to-cart']}
        >
          <FontAwesome
            name='shopping-cart'
            color='#ff9f1c'
            size={20}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

FoodDetailScreen.propTypes = {
  navigation: PropTypes.object
}

export default FoodDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  back__button: {
    padding: 20,
    marginTop: StatusBar.currentHeight
  },
  poster: {
    height: 250,
    width: '100%'
  },
  poster__overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  rating: {
    position: 'absolute',
    left: 20,
    bottom: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    elevation: 5
  },
  favourite__wrapper: {
    position: 'absolute',
    right: 20,
    bottom: -20
  },
  favourite__button: {
    borderRadius: 50,
    backgroundColor: '#FF545A',
    padding: 10,
    elevation: 5
  },
  content: {
    marginTop: 60,
    paddingHorizontal: 20
  },
  footer: {
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9F1C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 15,
    marginTop: 'auto',
    marginBottom: 20
  },
  stepper__container: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#FF9C1F',
    marginLeft: 'auto'
  },
  stepper__button: {
    color: '#FFFFFF',
    backgroundColor: '#FF9F1C'
  },
  'add-to-cart': {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingTop: 8,
    marginLeft: 20
  }
})
