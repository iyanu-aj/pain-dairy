import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import colors from '../config/colors'

export default class MyDatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = { date: '10-05-2021' }
  }

  render () {
    return (
      <DatePicker
        style={{ width: 180, height: 60, top: -18 }}
        date={this.state.date}
        mode='date'
        placeholder='select date'
        format='DD-MM-YYYY'
        minDate='10-05-2021'
        maxDate='10-05-2021'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0

          },
          dateInput: {
            marginLeft: 36,
            borderColor: colors.primary,
            backgroundColor: colors.offwhite,
            borderRadius: 10

          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
  }
}
