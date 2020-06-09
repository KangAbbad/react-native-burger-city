import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Calendar } from 'react-native-calendars'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onChangePickup } from '../../../../redux/actions/myOrder'

import { BaseStyles } from '../../../../constant'
import { StandardButton, IconButton } from '../../../global/CustomButton'
import SlideUpModal from '../../../global/SlideUpModal'

class PickupDateTimeContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalVisible: false,
      dateToday: '',
      selectedDate: '',
      selectedHour: 0,
      selectedMinute: 0,
      selectedTime: 'am',
      isShowTimePicker: false
    }
  }

  getDateToday = () => {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const dd = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
    const selectedHour = date.getHours()
    const selectedMinute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    this.getSelectedTime(selectedHour)

    this.setState({
      dateToday: `${yyyy}-${mm}-${dd}`,
      selectedDate: `${yyyy}-${mm}-${dd}`,
      selectedHour,
      selectedMinute
    })
  }

  getSelectedTime = (hours) => {
    const hoursTime = (hours + 24) % 24

    let selectedTime = 'am'

    if (hoursTime > 12) {
      selectedTime = 'pm'
    }

    this.setState({ selectedTime })
  }

  componentDidMount () {
    this.getDateToday()
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderEditDate()}
        {this.renderEditTime()}
        {this.renderNote()}
        {this.renderSelectButton()}
        {this.renderModalCelendar()}
        {this.renderTimePicker()}
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
    const { selectedHour, selectedMinute, selectedTime } = this.state
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
            onPress={this.onToggleTimePicker}
          >
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--black']
              ]}
            >
              {selectedHour}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles['time__picker__button']}
            onPress={this.onToggleTimePicker}
          >
            <Text
              style={[
                BaseStyles['text'],
                BaseStyles['text--large'],
                BaseStyles['text--black']
              ]}
            >
              {selectedMinute}
            </Text>
          </TouchableOpacity>

          <DropDownPicker
            items={[
              { label: 'AM', value: 'am' },
              { label: 'PM', value: 'pm' }
            ]}
            defaultValue={selectedTime}
            containerStyle={{ marginHorizontal: 7 }}
            style={{ borderWidth: 0 }}
            dropDownStyle={{ borderWidth: 0, borderTopWidth: 1, borderTopColor: '#EFEFEF' }}
            labelStyle={{
              color: '#1D2126',
              fontFamily: 'Nunito-Regular',
              fontSize: 14
            }}
            arrowStyle={{ marginLeft: 10 }}
            onChangeItem={item => {
              this.setState({ selectedTime: item.value })
            }}
          />
        </View>
      </View>
    )
  }

  onToggleTimePicker = () => {
    this.setState(prevState => ({
      isShowTimePicker: !prevState.isShowTimePicker
    }))
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
    return (
      <StandardButton
        titleButton='Select'
        onPress={this.onSelect}
        buttonStyle={styles['proceed-order__button']}
      />
    )
  }

  onSelect = () => {
    const { selectedDate, selectedHour, selectedMinute, selectedTime } = this.state
    const { onProceed, onChangePickup } = this.props
    const pickupData = {
      date: selectedDate,
      time: `${selectedHour}:${selectedMinute} ${selectedTime.toUpperCase()}`
    }

    onChangePickup(pickupData)
    onProceed()
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

  renderTimePicker = () => {
    const { isShowTimePicker } = this.state
    const date = new Date()
    if (isShowTimePicker) {
      return (
        <DateTimePicker
          value={date}
          mode='time'
          is24Hour={false}
          display='spinner'
          onChange={this.onChangeTime}
        />
      )
    }
  }

  onChangeTime = (event, selectedDate) => {
    const date = new Date()
    const currentDate = selectedDate || date

    const hours = currentDate.getHours()
    const ampmHours = (hours + 12) % 24
    const selectedHour = ampmHours < 10 ? `0${ampmHours}` : ampmHours
    const selectedMinute = currentDate.getMinutes()

    this.onToggleTimePicker()
    this.getSelectedTime(hours)
    this.setState({ selectedHour, selectedMinute })
  }
}

PickupDateTimeContent.propTypes = {
  onProceed: PropTypes.func,
  onChangePickup: PropTypes.func
}

const mapStateToProps = (state) => {
  return {}
}

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({ onChangePickup }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(PickupDateTimeContent)

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
