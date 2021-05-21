import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Card ({ title, subTitle, time, tag, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>

          <AppText style={styles.title} numberOfLines={1}> {title}</AppText>
          <AppText style={styles.tag} numberOfLines={2}> {tag}</AppText>
          <AppText style={[styles.subTitle, styles.time]} numberOfLines={1}> {subTitle}{time}</AppText>

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 6,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: colors.light

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
    fontSize: 12,
  },
  time: {
    color: colors.orange,
    fontSize: 11,
    textAlign: 'left',
    paddingTop: 6
  },
  title: {
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 17
  }
})

export default Card
