import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPostsScreen from '../screens/MyPostsScreen'
import ViewPostScreen from '../screens/ViewPostScreen'

const Stack = createStackNavigator()

const MyPostNavigator = () => (
  <Stack.Navigator mode='modal' screenOptions={{ headerShown: true }}>
    <Stack.Screen name='MyPosts' component={MyPostsScreen} options={{ title: 'My Post', headerBackTitleVisible: false }} />
    <Stack.Screen name='View' component={ViewPostScreen} options={{ title: 'View Post', headerBackTitleVisible: false }} />
  </Stack.Navigator>
)

export default MyPostNavigator
