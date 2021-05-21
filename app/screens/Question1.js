import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from 'react-native'

import { Picker } from '@react-native-picker/picker'
import { AppButton, ClickButton } from '../components'
import colors from '../config/colors'

const Question1 = () => {
  const [options, setOptions] = useState('Arthritis')
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >

      <View style={styles.questionContainer}>

        <Image style={styles.qmark} source={require('../assets/question.png')} />

        <Text style={styles.qnumberText}>
          Question 1 of 2
        </Text>

      </View>

      <Text style={{
        width: 300,
        fontSize: 24,
        color: colors.primary,
        fontWeight: 'bold',
        top: 197,
        textAlign: 'center'
      }}
      >What pain conditions do you have?
      </Text>

      <View style={styles.container}>
        <Picker
          itemStyle={{ height: 350 }}
          selectedValue={options}
          onValueChange={currentOptions => setOptions(currentOptions)}
        >
          <Picker.Item label='Arthritis' value='Arthritis' />
          <Picker.Item label='Back pain' value='Back Pain' />
          <Picker.Item label='Headache' value='Headache' />
          <Picker.Item label='Neck pain' value='Neck pain' />
        </Picker>
        <Text
          style={{
            fontSize: 20,
            color: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}
        >
          Selected: {options}
        </Text>

      </View>

      <View style={styles.addnewButton}>
        <ClickButton title='Add New' />
      </View>
      <View style={styles.nextButton}>

        <AppButton title='Next Question' />

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center'
  },

  container: {
    top: 150,
    height: 400,
    alignContent: 'center',

    width: '100%'
  },

  text: {
    color: colors.secondary,
    fontSize: 20
  },
  questionContainer: {
    position: 'absolute',
    alignItems: 'center'
  },

  qmark: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 60,
    alignItems: 'flex-end'
  },
  qnumberText: {
    width: 300,
    height: 48,

    top: 145,

    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24

  },

  nextButton: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 20,
    borderRadius: 5

  },

  addnewButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,

    position: 'absolute',
    width: '100%',
    bottom: 140

  }
})

export default Question1
