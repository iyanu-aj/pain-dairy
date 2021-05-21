import React, { useState, useContext } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import * as Yup from 'yup'

import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/Forms'
import authApi from '../api/auth'
// import useAuth from '../auth/useAuth'
import jwtDecode from 'jwt-decode'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'


// validation

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')

})

function SignInScreen (props) {
  const authContext = useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)

// retrieving and decoding the authorization token
    const bearerToken = result.data.token;
    const autToken = bearerToken.split(' ')[1];
    const user = jwtDecode(autToken)
    authContext.setUser(user)
    authStorage.storeToken('Bearer ' + autToken)
    // auth.logIn(result.data)
  }

  return (

    <View>

      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password.'
          visible={loginFailed}
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
        <SubmitButton title='Sign in' />

      </AppForm>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    width: 40

  },

  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20

  },

  loginFormButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    top: 20,
    borderRadius: 5

  }

})

export default SignInScreen



