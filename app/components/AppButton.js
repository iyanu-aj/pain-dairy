import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

function AppButton ({ title, onPress }) {
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
    padding: 15,
    width: '90%',
    marginVertical: 20,
    left: 20
  },

  text: {
    color: colors.white,
    fontSize: 18,
  }

})

export default AppButton
