import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PostListScreen from '../screens/PostListScreen'
import ViewPostScreen from '../screens/ViewPostScreen'
import AddPostScreen from '../screens/AddPostScreen'

const Stack = createStackNavigator()

const AddPostNavigator = () => (
  <Stack.Navigator mode='modal' screenOptions={{ headerShown: true }}>
    <Stack.Screen name='AddPost' component={AddPostScreen} options={{ title: 'Add Post' }} />
    <Stack.Screen name='Feed' component={PostListScreen} />
    <Stack.Screen name='View' component={ViewPostScreen} options={{ title: 'View Post' }} />
  </Stack.Navigator>
)

export default AddPostNavigator
