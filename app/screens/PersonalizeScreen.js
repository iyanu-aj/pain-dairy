import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'

import { AppButton, ClickButton }  from '../components'
import colors from '../config/colors'

function PersonalizeScreen (props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.textP2Container}>

        <Text style={{
          fontSize: 24,
          color: colors.primary,
          fontWeight: 'bold',
          top: 240,
          textAlign: 'center'
        }}
        >
          First, Let's personalize your experience with us
        </Text>

      </View>

      <View>
        <Text style={styles.answerP2Text}>
          Answer some questions before you start tracking
        </Text>
      </View>

      <View style={styles.buttonContainer}>

        <AppButton title='Continue' />

      </View>

      <View style={styles.loginButton}>

        <Text style={{
          fontSize: 18,
          color: colors.primary
        }}
        >
          <Text style={{ color: colors.black }}>Have an account?</Text>
          {' '}
        </Text>

        <ClickButton title='Login' />

      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center'
  },

  textP2Container: {
    position: 'absolute',
    alignItems: 'center'

  },

  answerP2Text: {

    width: 228,
    height: 48,
    top: 358,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24
  },

  buttonContainer: {

    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '35%',
    borderRadius: 5
  },

  loginButton: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    position: 'absolute',
    width: 305,
    height: 45,
    left: '13%',
    bottom: '10%',
    color: colors.black

  }

})

export default PersonalizeScreen
