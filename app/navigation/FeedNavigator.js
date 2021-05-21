import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PostListScreen from '../screens/PostListScreen'
import ViewPostScreen from '../screens/ViewPostScreen'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name='Feed' component={PostListScreen} options={{ headerBackTitleVisible: false }}/>
    <Stack.Screen name='View' component={ViewPostScreen} options={{ title: 'View Post', headerBackTitleVisible: false }} />
  </Stack.Navigator>
)

export default FeedNavigator
