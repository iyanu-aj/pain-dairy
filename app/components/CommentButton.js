import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

function CommentButton ({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>

      <Text style={styles.text}>
        {title}
      </Text>


    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 65,
    marginVertical: 20,
    left: 345,
    height: 45,
    bottom: 85
  },

  text: {
    color: colors.white,
    fontSize: 10
  }

})

export default CommentButton
