import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { BaseStyles } from '../../constant'
import Header from '../../components/global/Header'
import OrderMethodContent from '../../components/scoped/OurBurgerComponents/OrderMethodContent'
import DeliveryAddressContent from '../../components/scoped/OurBurgerComponents/DeliveryAddressContent'
import PickupDateTimeContent from '../../components/scoped/OurBurgerComponents/PickupDateTimeContent'
import MenuContent from '../../components/scoped/OurBurgerComponents/MenuContent'
import DishContent from '../../components/scoped/OurBurgerComponents/DishContent'
import SelectedDishContent from '../../components/scoped/OurBurgerComponents/SelectedDishContent'
import ChoicesDishContent from '../../components/scoped/OurBurgerComponents/ChoicesDishContent'
import CartContent from '../../components/scoped/OurBurgerComponents/CartContent'
import CartSubtotalContent from '../../components/scoped/OurBurgerComponents/CartSubtotalContent'
import CondimentsContent from '../../components/scoped/OurBurgerComponents/CondimentsContent'
import CartTotalContent from '../../components/scoped/OurBurgerComponents/CartTotalContent'

class OurBurgerScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideActive: 0
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderHeader = () => {
    const { slideActive } = this.state
    const withBack = slideActive > 0
    return (
      <Header
        withBack={withBack}
        onPressLeftButton={() => this.content.snapToPrev()}
      />
    )
  }

  renderContent = () => {
    const { height, width } = Dimensions.get('window')
    return (
      <Carousel
        ref={ref => { this.content = ref }}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={this.renderSection}
        sliderHeight={height}
        sliderWidth={width}
        itemHeight={height}
        itemWidth={width}
        inactiveSlideScale={1}
        scrollEnabled={false}
        onSnapToItem={this.onSnap}
      />
    )
  }

  onSnap = (slideActive) => {
    this.setState({ slideActive })
  }

  renderSection = ({ item, index }) => {
    switch (index) {
      case 0:
        return (
          <OrderMethodContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 1:
        return (
          <DeliveryAddressContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 2:
        return (
          <PickupDateTimeContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 3:
        return (
          <MenuContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 4:
        return (
          <DishContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 5:
        return (
          <SelectedDishContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 6:
        return (
          <ChoicesDishContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 7:
        return (
          <CartContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 8:
        return (
          <CartSubtotalContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 9:
        return (
          <CondimentsContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 10:
        return (
          <CartTotalContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      default:
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--2xl'],
                BaseStyles['text--black'],
                BaseStyles['text--bold']
              ]}
            >
              404 Not Found
            </Text>
          </View>
        )
    }
  }
}

export default OurBurgerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7'
  },
  content: {
    flex: 1
  },

  text: {
    includeFontPadding: false
  },
  'text--black': {
    color: '#1D2126'
  },
  'text--bold': {
    fontFamily: 'Nunito-Bold'
  },
  'text--semibold': {
    fontFamily: 'Nunito-SemiBold'
  },
  'text--small': {
    fontSize: 10
  },
  'text--medium': {
    fontSize: 12
  },
  'text--large': {
    fontSize: 14
  },
  'text--xl': {
    fontSize: 16
  },
  'text--xxl': {
    fontSize: 18
  },
  'text--3xl': {
    fontSize: 20
  }
})
