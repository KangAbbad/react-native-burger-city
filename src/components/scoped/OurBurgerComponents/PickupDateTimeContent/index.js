import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Calendar } from 'react-native-calendars'
import DropDownPicker from 'react-native-dropdown-picker'

import { BaseStyles } from '../../../../constant'
import { StandardButton, IconButton } from '../../../global/CustomButton'
import SlideUpModal from '../../../global/SlideUpModal'

class PickupDateTimeContent extends Component {
  constructor (props) {
    super(props)

    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const dd = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()

    this.state = {
      isModalVisible: false,
      dateToday: `${yyyy}-${mm}-${dd}`,
      selectedDate: `${yyyy}-${mm}-${dd}`,
      selectedHour: 0,
      selectedMinute: 0,
      selectedTime: 'AM'
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderEditDate()}
        {this.renderEditTime()}
        {this.renderNote()}
        {this.renderSelectButton()}
        {this.renderModalCelendar()}
      </View>
    )
  }

  renderEditDate = () => {
    const { selectedDate } = this.state
    const word = selectedDate.split('-')
    const titleButton = `${word[2]} / ${word[1]} / ${word[0]}`

    return (
      <View style={styles['date']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Pickup Date
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black']
          ]}
        >
          Please select date
        </Text>

        <IconButton
          titleButton={titleButton}
          iconRight={
            <MaterialCommunityIcons
              name='calendar-star'
              size={18}
              color='#717B8E'
            />
          }
          buttonStyle={{
            paddingRight: 15,
            marginTop: 18
          }}
          onPress={() => {
            this.onToggleModal()
          }}
        />
      </View>
    )
  }

  renderEditTime = () => {
    return (
      <View style={styles['time']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--3xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Pickup Time
        </Text>

        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--large'],
            BaseStyles['text--black']
          ]}
        >
          Please select time
        </Text>

        <View style={styles['time__picker']}>
          <TouchableOpacity
            style={styles['time__picker__button']}
            onPress={() => {}}
          >
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--black']
              ]}
            >
              06
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles['time__picker__button']}
            onPress={() => {}}
          >
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--black']
              ]}
            >
              50
            </Text>
          </TouchableOpacity>

          <DropDownPicker
            items={[
              { label: 'AM', value: 0, selected: false },
              { label: 'PM', value: 1, selected: true }
            ]}
            containerStyle={{ marginHorizontal: 7 }}
            style={{ borderWidth: 0 }}
            dropDownStyle={{ borderWidth: 0, borderTopWidth: 1, borderTopColor: '#EFEFEF' }}
            labelStyle={{
              color: '#1D2126',
              fontFamily: 'Nunito-Regular',
              fontSize: 14
            }}
            arrowStyle={{ marginLeft: 10 }}
            onChangeItem={item => console.log(item.label, item.value)}
          />

        </View>
      </View>
    )
  }

  renderNote = () => {
    return (
      <Text
        style={[
          BaseStyles['text'],
          BaseStyles['text--large'],
          BaseStyles['text--black'],
          { marginTop: 30 }
        ]}
      >
        Minimum of 90 minutes before Pickup time
      </Text>
    )
  }

  renderSelectButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Select'
        onPress={onProceed}
        buttonStyle={styles['proceed-order__button']}
      />
    )
  }

  onToggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible
    }))
  }

  onDayPress = (day) => {
    this.setState({ selectedDate: day.dateString })
  }

  renderModalCelendar = () => {
    const { isModalVisible, dateToday, selectedDate } = this.state
    return (
      <SlideUpModal
        isModalVisible={isModalVisible}
        onClose={this.onToggleModal}
      >
        <Calendar
          onDayPress={this.onDayPress}
          minDate={dateToday}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#FF9C1F',
              selectedTextColor: '#FFFFFF'
            }
          }}
          theme={{
            todayTextColor: '#FF9C1F',
            arrowColor: '#FF9C1F',
            selectedColor: '#FF9C1F',
            selectedTextColor: '#FFFFFF',
            textDayFontFamily: 'Nunito-Regular',
            textMonthFontFamily: 'Nunito-SemiBold',
            textDayHeaderFontFamily: 'Nunito-Regular',
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14
          }}
          style={{ paddingBottom: 20 }}
        />
      </SlideUpModal>
    )
  }
}

PickupDateTimeContent.propTypes = {
  onProceed: PropTypes.func
}

export default PickupDateTimeContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  date: {
  },
  time: {
    marginTop: 30
  },
  time__picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -7,
    marginTop: 18
  },
  time__picker__button: {
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 7
  },
  edit__button: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 15,
    marginTop: 18
  },
  'proceed-order__button': {
    marginTop: 'auto',
    marginBottom: 30
  }
})
