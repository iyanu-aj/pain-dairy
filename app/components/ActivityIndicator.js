import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

function ActivityIndicator ({ visible = false }) {
  if (!visible) return null

  return (
    <View style={styles.overlay}>

      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/activityindicator.json')}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          justifyContent: 'center'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: { 
    height: '100%',
    width: '100%',
    opacity: 0.5,
    backgroundColor: colors.offwhite,
    zIndex: 1

  }
})

export default ActivityIndicator
