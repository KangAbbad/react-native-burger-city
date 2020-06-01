import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, FlatList, StatusBar, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'
import { TouchableOpacity as RNGHTouchable } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onAddFavourite, onRemoveFavourite, onAddTrolley } from '../../redux/actions/home'

import { BaseStyles } from '../../constant'
import Stepper from '../../components/global/Stepper'
import { StandardButton } from '../../components/global/CustomButton'

class FoodDetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false,
      countNumber: 1
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderMainSection()}
        {this.renderFooterSection()}
        {this.renderRemoveModal()}
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
    const { navigation, selectedItem } = this.props
    const { showDeleteItem = false } = this.props.route.params
    const btnIcon = showDeleteItem ? 'delete' : 'favorite'
    return (
      <View>
        <StatusBar
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <ImageBackground
          source={{ uri: selectedItem.imageUrl }}
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
              {selectedItem.rating}
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
              onPress={this.onPosterAction}
              style={styles['favourite__button']}
            >
              <MaterialIcons
                name={btnIcon}
                color='#FFFFFF'
                size={20}
              />
            </RNGHTouchable>
          </View>
        </ImageBackground>
      </View>
    )
  }

  onPosterAction = () => {
    const { selectedItem, onAddFavourite } = this.props
    const { showDeleteItem = false } = this.props.route.params

    if (showDeleteItem) {
      this.onToggleModal()
    } else {
      onAddFavourite(selectedItem)
    }
  }

  renderContent = () => {
    const { selectedItem } = this.props
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
          {selectedItem.name}
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black'],
            { marginTop: 20 }
          ]}
        >
          {selectedItem.description}
        </Text>
      </View>
    )
  }

  renderFooterSection = () => {
    const { countNumber } = this.state
    const { navigation, selectedItem, onAddTrolley } = this.props
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
          ${selectedItem.price.toString()}
        </Text>

        <Stepper
          count={countNumber}
          containerStyle={styles['stepper__container']}
          buttonStyle={styles['stepper__button']}
          onCount={(number) => this.onCount(number)}
        />

        <TouchableOpacity
          onPress={() => {
            onAddTrolley({ ...selectedItem, countNumber })
            navigation.navigate('TrolleyScreen')
          }}
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

  onCount = (countNumber) => {
    this.setState({ countNumber })
  }

  onToggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible
    }))
  }

  renderRemoveModal = () => {
    const { isModalVisible } = this.state
    const { navigation, onRemoveFavourite, selectedItem } = this.props
    return (
      <Modal
        isVisible={isModalVisible}
        useNativeDriver
        onBackdropPress={this.onToggleModal}
      >
        <View style={styles['remove__modal']}>
          <StatusBar
            barStyle='light-content'
            backgroundColor='rgba(0, 0, 0, 0.7)'
          />

          <Text
            style={[
              BaseStyles['text'],
              BaseStyles['text--xl'],
              BaseStyles['text--bold'],
              BaseStyles['text--black']
            ]}
          >
            Do you want to remove it?
          </Text>

          <View style={styles['btn__wrapper']}>
            <StandardButton
              titleButton='No'
              buttonStyle={{
                flex: 1,
                paddingVertical: 10,
                marginRight: 10
              }}
              onPress={this.onToggleModal}
            />
            <StandardButton
              titleButton='Yes'
              buttonStyle={{
                flex: 1,
                backgroundColor: '#CECECE',
                paddingVertical: 10
              }}
              onPress={() => {
                onRemoveFavourite(selectedItem.id)
                this.onToggleModal()
                setTimeout(() => {
                  navigation.goBack()
                }, 500)
              }}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

FoodDetailScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  selectedItem: PropTypes.object,
  onAddFavourite: PropTypes.func,
  onRemoveFavourite: PropTypes.func,
  onAddTrolley: PropTypes.func
}

const mapStateToProps = (state) => {
  const { selectedItem } = state.home
  return { selectedItem }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onAddFavourite, onRemoveFavourite, onAddTrolley }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetailScreen)

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
  },
  remove__modal: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  btn__wrapper: {
    flexDirection: 'row',
    marginTop: 25
  }
})
