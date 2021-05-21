import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import colors from '../config/colors'

function QTextInput ({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>

      <TextInput placeholder='Click to add new' style={styles.textInput} {...otherProps} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offwhite,
    borderRadius: 1,
    flexDirection: 'row',
    width: '89%',
    alignSelf: 'center',
    height: 40,
    padding: 10,
    marginVertical: 10,
    borderRadius: 6
  },

  textInput: {
    fontSize: 15,
    color: colors.dark,
    width: '100%'
  },

  icon: {
    marginRight: 10
  }

})

export default QTextInput
