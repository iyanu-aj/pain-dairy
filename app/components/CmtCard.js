import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

function CmtCard ({ title, subTitle, time, comment, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* <Image style={styles.image} source={image} /> */}
        <View style={styles.detailsContainer}>
          <AppText style={styles.tag} numberOfLines={4}> {comment}</AppText>
          <AppText style={[styles.subTitle, styles.time]} numberOfLines={1}> From: {subTitle}                                                    {time}</AppText>
          {/* <AppText style={styles.time} numberOfLines={1}> {time}</AppText> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: colors.white,
    marginBottom: 1,
    borderWidth: 0.5,
    overflow: 'hidden',
    borderColor: colors.light,
    width: '100%'

  },
  detailsContainer: {
    padding: 10
  },
  // image: {
  //   width: '100%',
  //   height: 200
  // },
  subTitle: {
    color: colors.orange,
    fontSize: 11,
    textAlign: 'left'
  },
  tag: {
    color: colors.black,
    fontSize: 13
  },
  time: {
    color: colors.orange,
    fontSize: 11,
    textAlign: 'left',
    paddingTop: 6
  }
})

export default CmtCard
