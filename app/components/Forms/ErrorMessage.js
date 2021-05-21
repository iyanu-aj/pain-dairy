import React from 'react'
import { StyleSheet } from 'react-native'
import AppText from '../AppText'


function ErrorMessage ({ error, visible }) {
  if (!visible || !error) return null

  return (
      <AppText style={styles.error}>{error}</AppText>

  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    paddingLeft: 20,
    fontSize: 14
  }
})

export default ErrorMessage
