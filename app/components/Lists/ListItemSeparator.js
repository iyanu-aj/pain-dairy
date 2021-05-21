import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '../../config/colors'

function ListItemSeparator (props) {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.bordercol
  }
})

export default ListItemSeparator
