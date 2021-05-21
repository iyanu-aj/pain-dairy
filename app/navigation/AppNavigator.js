import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// import AccountNavigator from "./AccountNavigator";
import HomePageNavigator from './HomePageNavigator'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import ReportNavigator from './ReportNavigator'
import AddPostNavigator from './AddPostNavigator'

// import NewListingButton from "./NewListingButton";
// import routes from "./routes";

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Home' component={HomePageNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='home' color={color} size={size} />
        )
      }}
    />

    <Tab.Screen
      name='Report' component={ReportNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='file-document-outline' color={color} size={size} />
        )
      }}
    />

    <Tab.Screen
      name='Add Feed' component={AddPostNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='plus-circle-outline' color={color} size={size} />
        )
      }}
    />

    <Tab.Screen
      name='Community' component={FeedNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account-group' color={color} size={size} />
        )
      }}
    />

    <Tab.Screen
      name='Account' component={AccountNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account-circle-outline' color={color} size={size} />
        )
      }}
    />

  </Tab.Navigator>
)

export default AppNavigator
