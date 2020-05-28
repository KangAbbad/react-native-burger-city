import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import StarRating from 'react-native-star-rating'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/global/Header'

import burgerLogo from '../../assets/icons/burger-city-logo.png'
import ticketBg from '../../assets/images/ticket-background.png'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSlide: 0
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderSlider()}
          {this.renderOrder()}
          {this.renderBestOffer()}
        </ScrollView>
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor='transparent'
      />
    )
  }

  renderHeader = () => {
    return (
      <Header />
    )
  }

  renderSlider = () => {
    return (
      <View>
        {this.renderCarousel()}
        {this.renderCarouselPagination()}
      </View>
    )
  }

  renderCarousel = () => {
    const { width } = Dimensions.get('window')
    const { banners } = this.props
    return (
      <Carousel
        data={banners}
        decelerationRate='fast'
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        renderItem={this.renderCarouselItem}
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    )
  }

  renderCarouselItem = ({ item }) => {
    return (
      <View styles={styles['home__slider__wrapper']}>
        <ImageBackground
          // styles={styles['home__slider__image__wrapper']}
          source={{ uri: item.imageUrl }}
          resizeMode='cover'
          style={styles['home__slider__image']}
        >
          <View style={styles['home__slider__image__overlay']} />
          <Text style={styles['home__slider__text']}>
            {item.lead}
          </Text>
        </ImageBackground>
      </View>
    )
  }

  renderCarouselPagination () {
    const { activeSlide } = this.state
    const { banners } = this.props
    return (
      <Pagination
        dotsLength={banners.length}
        activeDotIndex={activeSlide}
        dotStyle={styles['home__pagination__dot']}
        dotContainerStyle={styles['home__pagination__dot__container']}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={styles['home__pagination__container']}
      />
    )
  }

  renderOrder = () => {
    return (
      <View style={styles['home__order']}>
        {this.renderOrderTicket('Track Here')}
        {this.renderOrderTicket('Order Here')}
      </View>
    )
  }

  renderOrderTicket = (title = 'Custom Title') => {
    return (
      <ImageBackground
        source={ticketBg}
        resizeMode='contain'
        style={styles['home__order__ticket']}
      >
        <View style={styles['home__order__ticket__content']}>
          <Image
            source={burgerLogo}
            style={{ width: 38, height: 46 }}
          />

          <View style={styles['home__order__ticket__desc']}>
            <Text style={styles['home__order__title']}>
              {title}
            </Text>
            <Text style={styles['home__order__subtitle']}>
              Login to continue Burger City
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  renderBestOffer = () => {
    const { bestOffers } = this.props

    return (
      <View style={styles['home__best-offer']}>
        <Text style={styles['home__best-offer__title']}>
          Best Offers
        </Text>

        <FlatList
          data={bestOffers}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderBestOfferItem}
          contentContainerStyle={styles['home__best-offer__list']}
        />
      </View>
    )
  }

  renderBestOfferItem = ({ item }) => {
    const { navigation } = this.props
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('FoodDetailScreen')}
      >
        <View style={styles['home__best-offer__item']}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles['home__best-offer__image']}
          />

          <View style={styles['home__best-offer__info']}>
            <Text
              style={styles['home__best-offer__name']}
              numberOfLines={2}
            >
              {item.name}
            </Text>
            <Text style={styles['home__best-offer__price']}>
              ${item.price}
            </Text>
          </View>

          <StarRating
            disabled
            maxStars={5}
            rating={item.rating}
            starSize={10}
            fullStarColor='#FF9F1C'
            emptyStar='star'
            emptyStarColor='#cecece'
            containerStyle={styles['home__best-offer__rate']}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  banners: PropTypes.array,
  bestOffers: PropTypes.array
}

const mapStateToProps = (state) => {
  const { banners, bestOffers } = state.home
  return { banners, bestOffers }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  home__slider__wrapper: {
    paddingHorizontal: 30,
    paddingTop: 100
  },
  home__slider__image: {
    height: 210,
    width: '100%'
  },
  home__slider__image__overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  home__slider__text: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 250,
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: '#ffffff',
    lineHeight: 35
  },
  home__pagination__dot__container: {
    marginHorizontal: 2
  },
  home__pagination__dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  home__pagination__container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  home__order: {
    marginTop: 8
  },
  home__order__ticket: {
    marginHorizontal: 20,
    marginTop: 15
  },
  home__order__ticket__content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 40
  },
  home__order__ticket__desc: {
    marginLeft: 20
  },
  home__order__title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: '#ffffff',
    includeFontPadding: false
  },
  home__order__subtitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    color: '#ffffff',
    includeFontPadding: false
  },
  'home__best-offer': {
    marginTop: 25,
    marginBottom: 25
  },
  'home__best-offer__item': {
    overflow: 'hidden',
    width: 150
  },
  'home__best-offer__title': {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#1D2126',
    includeFontPadding: false,
    paddingHorizontal: 20
  },
  'home__best-offer__list': {
    paddingHorizontal: 10,
    marginTop: 15
  },
  'home__best-offer__image': {
    borderRadius: 10,
    alignSelf: 'center',
    height: 175,
    width: 125,
    marginHorizontal: 7
  },
  'home__best-offer__info': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10
  },
  'home__best-offer__name': {
    flex: 1.5,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#1D2126',
    includeFontPadding: false
  },
  'home__best-offer__price': {
    flex: 0.5,
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: '#FF9F1C',
    textAlign: 'right',
    includeFontPadding: false
  },
  'home__best-offer__rate': {
    marginLeft: 10,
    marginTop: 10,
    paddingRight: 70
  }
})
