import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native'

import { AppButton, ClickButton } from '../components'
import colors from '../config/colors'

function GetRemindedScreen (_props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require('../assets/background.jpg')}
      >
        <View style={styles.bellsContainer}>

          <Text style={{ fontSize: 24, color: '#0E6BA8', fontWeight: 'bold', top: 70 }}>Get reminded</Text>
          <Image style={styles.bell} source={require('../assets/bell.png')} />

        </View>

        <View>
          <Text style={styles.trackingText}>
            Tracking regularly will help you manage your pain
          </Text>

        </View>

        <View style={styles.notificationYButton}>

          <AppButton title='Yes, Please' />

        </View>

        <View style={styles.skipButton}>

          <ClickButton title='Skip' />

        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    height: 1050,
    width: '100%',
    alignItems: 'center'
  },

  bellsContainer: {
    position: 'absolute',
    alignItems: 'center'
  },

  bell: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 170,
    alignItems: 'flex-end'
  },

  trackingText: {

    width: 300,
    height: 48,

    top: 470,

    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24
  },

  notificationYButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    position: 'relative',
    paddingRight: 25,
    height: 1450

  },

  skipButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 1400,
    color: colors.secondary

  }

})

export default GetRemindedScreen
