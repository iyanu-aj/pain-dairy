import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import moment from 'moment'


function DateCard ({ title, subTitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* <Image style={styles.image} source={image} /> */}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}> {title}  </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}> {subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    height: 40,
    backgroundColor: colors.white,
    marginBottom: 8,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: colors.light

  },
  detailsContainer: {
    padding: 13
  },
  // image: {
  //   width: '100%',
  //   height: 200
  // },
  subTitle: {
    color: colors.black

  },
  title: {
    marginBottom: 7,
    fontSize: 14
  }
})

export default DateCard
