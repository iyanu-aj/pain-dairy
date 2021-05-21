import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors'

function SearchBar () {
  return (
    <View style={styles.search}>

      <TextInput placeholder='Click here to search...' style={styles.textInput} />
      <MaterialCommunityIcons style={styles.icon} name='magnify' color={colors.light} size={24} />

    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.offwhite,
    borderRadius: 8,
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    height: 40,
    padding: 10,
    marginVertical: 10,
    top: -10
  },

  textInput: {
    fontSize: 15,
    color: colors.dark,
    width: '100%'
  },

  icon: {
    marginRight: 10,
    left: -20,
    right: 40
  }

})

export default SearchBar
