import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const App = () => {
  const [item, setItem] = useState('Item')
  return (
    <View>
      <Text> D</Text>
      <View>
        <TextInput
          placeholder='Email'
        />
        <TextInput
          secureTextEntry
          placeholder='Password'
        />
        <Picker
          selectedValue={item}
          onValueChange={currentItem => setItem(currentItem)}
        >
          <Picker.Item label='A' value='A' />
          <Picker.Item label='B' value='B' />
          <Picker.Item label='C' value='C' />
        </Picker>
        <Text>
          Selected: {item}
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  // Check project repo for styles
})

export default App
