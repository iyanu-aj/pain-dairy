import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessagesScreen from '../screens/MessagesScreen'

const Stack = createStackNavigator()

const MessagesNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name='Messages' component={MessagesScreen} />
  </Stack.Navigator>
)

export default MessagesNavigator
