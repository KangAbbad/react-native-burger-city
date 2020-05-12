import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { BaseStyles } from '../../constant'
import Header from '../../components/global/Header'
import OrderPaymentContent from '../../components/scoped/WalletComponents/OrderPaymentContent'
import OrderConfirmedContent from '../../components/scoped/WalletComponents/OrderConfirmedContent'

class WalletScreen extends Component {
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
        data={[0, 1]}
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
          <OrderPaymentContent
            onProceed={() => this.content.snapToNext()}
          />
        )

      case 1:
        return (
          <OrderConfirmedContent
            navigation={this.props.navigation}
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

WalletScreen.propTypes = {
  navigation: PropTypes.object
}

export default WalletScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
