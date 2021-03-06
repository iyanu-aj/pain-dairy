import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import jwtDecode from 'jwt-decode'

export default function App () {
  const [user, setUser] = useState()

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    setUser(jwtDecode(token))
  }

  useEffect(() => {
    restoreToken()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
