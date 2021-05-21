import React, { useState, useContext } from 'react'
import { StyleSheet, Image, View, SafeAreaView, Alert } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/Forms'
import colors from '../config/colors'
import usersApi from '../api/users'
import authApi from '../api/auth'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'

import jwtDecode from 'jwt-decode'

// validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')

})


function SignUpScreen ({ navigation }) {
  const authContext = useContext(AuthContext)
  const [regFailed, setRegFailed] = useState(false)
  // const [error, setError] = useState()

  const handleSubmit = async ({ name, email, password }) => {
    const result = await usersApi.register(name, email, password)
    if (!result.ok) return Alert.alert('Account Created')
    else navigation.navigate('Sign In')
    // if (!result.ok) {
    //   if (result.data) setRegFailed(true)
    //   else {
    //     setRegFailed(false)
    //     navigation.navigate('Sign In')
    //   }
    // }
    //   return
    // }

    // const bearerToken = result.data.token
    // const autToken = bearerToken.split(' ')[1]
    // const user = jwtDecode(autToken)
    // authContext.setUser(user)
    // authStorage.storeToken(autToken)
    // const { data: authToken } = await authApi.login(
    //   email,
    //   password
    // );

    // const results = await authApi.login(
    //   email,
    //   password
    // )

    // const bearerToken = results.data.token
    // const autToken = bearerToken.split(' ')[1]
    // const user = jwtDecode(autToken)
    // authContext.setUser(user)
    // authStorage.storeToken(autToken)
  }

  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />

        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error='Account exists'
            visible={regFailed}
          />

          <AppFormField
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Name'
          />

          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <SubmitButton title='Sign Up' />
        </AppForm>

      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    padding: 400,
    width: 40

  },

  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20

  },

  signUpFormButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    top: 20,
    borderRadius: 5,
    fontFamily: 'NotoSerif'
  },

  textEnter: {

    paddingLeft: 20,
    color: colors.primary
  }

})

export default SignUpScreen
