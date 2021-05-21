import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import colors from '../config/colors'

function CTextInput ({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>

      <TextInput placeholder='Click to add new' style={styles.textInput} {...otherProps} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offwhite,
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    right: 32,
    height: 45,
    padding: 10,
    marginVertical: 10,
    bottom: 10,
    borderRadius: 5
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

export default CTextInput
