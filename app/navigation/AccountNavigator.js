import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MyPostsScreen from '../screens/MyPostsScreen'
import MessagesNavigator from './MessagesNavigator'
import MyPostNavigator from './MyPostNavigator'

const Stack = createStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Account' component={AccountScreen} />
    <Stack.Screen name='Messages' component={MessagesNavigator} />
    <Stack.Screen name='MyPosts' component={MyPostNavigator} options={{ title: 'My Posts'}} />

  </Stack.Navigator>
)

export default AccountNavigator
