import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

import AppButton from '../components/AppButton'
import colors from '../config/colors'
import LottieView from 'lottie-react-native'

function WelcomeScreen ({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>Pain management application</Text>

        <LottieView
          autoPlay
          loop
          source={require('../assets/animations/anim2.json')}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            justifyContent: 'center'
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Sign In' onPress={() => navigation.navigate('Sign In')} />
        <AppButton title='Sign Up' color='secondary' onPress={() => navigation.navigate('Sign Up')} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: '100%',
    height: 180
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  tagline: {
    fontSize: 25,
    fontWeight: '300',
    paddingVertical: 20,
    color: colors.primary
  }
})

export default WelcomeScreen
