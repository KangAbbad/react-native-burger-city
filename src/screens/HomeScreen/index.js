import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Text, Image, Dimensions, ImageBackground, ScrollView, FlatList } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import StarRating from 'react-native-star-rating'

import Header from '../../components/global/Header'

import burgerLogo from '../../assets/icons/burger-city-logo.png'
import sliderImg from '../../assets/images/slider-image.png'
import ticketBg from '../../assets/images/ticket-background.png'
import offer1 from '../../assets/images/image-1.png'
import offer2 from '../../assets/images/image-2.png'
import offer3 from '../../assets/images/image-15.png'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSlide: 0,
      bestOffer: [
        {
          image: offer1
        },
        {
          image: offer2
        },
        {
          image: offer3
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        <ScrollView>
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
    return (
      <Carousel
        data={[0, 0, 0]}
        renderItem={this.renderCarouselItem}
        decelerationRate='fast'
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    )
  }

  renderCarouselItem = ({ item }) => {
    return (
      <View styles={styles['home__slider__wrapper']}>
        <Image
          source={sliderImg}
          resizeMode='cover'
        />

        <Text style={styles['home__slider__text']}>
          World's Greatest Burgers.
        </Text>
      </View>
    )
  }

  renderCarouselPagination () {
    const { activeSlide } = this.state
    return (
      <Pagination
        dotsLength={3}
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
    const { bestOffer } = this.state

    return (
      <View style={styles['home__best-offer']}>
        <Text style={styles['home__best-offer__title']}>
          Best Offers
        </Text>

        <FlatList
          data={bestOffer}
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
    return (
      <View>
        <Image
          source={item.image}
          resizeMode='contain'
          style={styles['home__best-offer__image']}
        />

        <View style={styles['home__best-offer__info']}>
          <Text style={styles['home__best-offer__name']}>
            Beef Burger
          </Text>
          <Text style={styles['home__best-offer__price']}>
            $12
          </Text>
        </View>

        <StarRating
          disabled
          maxStars={5}
          rating={3}
          starSize={10}
          fullStarColor='#FF9F1C'
          emptyStar='star'
          emptyStarColor='#cecece'
          containerStyle={styles['home__best-offer__rate']}
        />
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  home__slider__wrapper: {
    paddingHorizontal: 30,
    paddingTop: 100
  },
  home__slider__text: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 250,
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: '#ffffff'
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
    marginTop: 18
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
  'home__best-offer__title': {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#1D2126',
    includeFontPadding: false,
    paddingHorizontal: 20
  },
  'home__best-offer__list': {
    paddingHorizontal: 13,
    marginTop: 15
  },
  'home__best-offer__image': {
    marginHorizontal: 7
  },
  'home__best-offer__info': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10
  },
  'home__best-offer__name': {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#1D2126',
    includeFontPadding: false
  },
  'home__best-offer__price': {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    color: '#FF9F1C',
    includeFontPadding: false
  },
  'home__best-offer__rate': {
    marginLeft: 10,
    marginTop: 5,
    paddingRight: 60
  }
})
