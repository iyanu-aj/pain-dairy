import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const App = () => {
  const [category, setCategory] = useState('Category')
  return (
    <View style={styles}>
      <View>
        <Picker
          selectedValue={category}
          onValueChange={currentCategory => setCategory(currentCategory)}
        >
          <Picker.Item label='A' value='A' />
          <Picker.Item label='B' value='B' />
          <Picker.Item label='C' value='C' />
        </Picker>
        <Text>
          Selected: {category}
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

})

export default App
