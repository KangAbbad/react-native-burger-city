import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Dimensions, StatusBar, BackHandler } from 'react-native'
import Modal from 'react-native-modal'

const SlideUpModal = (props) => {
  const { isModalVisible, onClose, children } = props
  const { height, width } = Dimensions.get('window')

  // useEffect(() => {
  //   const backAction = () => {
  //     console.log('backAction trigerred')
  //     onClose()
  //     return true
  //   }

  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

  //   return () => backHandler.remove()
  // }, [])

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      deviceHeight={height}
      deviceWidth={width}
      useNativeDriver
      coverScreen
      propagateSwipe
      swipeDirection='down'
      hideModalContentWhileAnimating
      style={styles['container']}
    >
      <View style={styles['content']}>
        <StatusBar
          animated
          translucent
          barStyle='light-content'
          backgroundColor='rgba(0, 0, 0, 0.7)'
        />
        <View style={styles['double-dash']} />
        {children}
      </View>
    </Modal>
  )
}

SlideUpModal.propTypes = {
  isModalVisible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any
}

SlideUpModal.defaultProps = {
  isModalVisible: false,
  onClose: () => {}
}

export default SlideUpModal

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#FFFFFF',
    margin: 0
  },
  content: {
  },
  'double-dash': {
    borderTopWidth: 3,
    borderTopColor: '#EFEFEF',
    borderBottomWidth: 3,
    borderBottomColor: '#EFEFEF',
    // position: 'absolute',
    // top: 10,
    alignSelf: 'center',
    height: 10,
    width: 50,
    marginVertical: 15
  }
})
