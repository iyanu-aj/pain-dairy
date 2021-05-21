import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ReportScreen from '../screens/ReportScreen'
import ViewReportsScreen from '../screens/ViewReportsScreen'

const Stack = createStackNavigator()

const ReportNavigator = () => (
  <Stack.Navigator mode='modal' screenOptions={{ headerShown: true }}>
    <Stack.Screen name='Report' component={ReportScreen} />
    <Stack.Screen name='ViewReports' component={ViewReportsScreen} />
  </Stack.Navigator>

)

export default ReportNavigator
