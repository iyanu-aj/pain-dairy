import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomepageScreen from '../screens/HomepageScreen'
import PainRecord from '../screens/PainRecord'
import ReportScreen from '../screens/ReportScreen'
import PostListScreen from '../screens/PostListScreen'

const Stack = createStackNavigator()

const HomePageNavigator = () => (
  <Stack.Navigator name='Home ' options={{ headerShown: true }}>

    <Stack.Screen name='Home' component={HomepageScreen} />
    <Stack.Screen name='Pain' component={PainRecord} options={{ title: 'Input pain record'}}/>
    <Stack.Screen name='Report' component={ReportScreen} />
    <Stack.Screen name='Community' component={PostListScreen} />

  </Stack.Navigator>
)

export default HomePageNavigator
