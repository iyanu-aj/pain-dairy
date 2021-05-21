import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Welcome'
      component={WelcomeScreen} options={{ headerShown: false }}
    />
    <Stack.Screen name='Sign In' component={SignInScreen} options={{ title: 'Sign In' }} />
    <Stack.Screen name='Sign Up' component={SignUpScreen} options={{ title: 'Sign Up' }} />
  </Stack.Navigator>
)

export default AuthNavigator
