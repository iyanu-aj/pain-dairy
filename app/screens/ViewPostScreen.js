import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, FlatList, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { AppText, Screen, ActivityIndicator, CmtCard } from '../components'
import ListItem from '../components/Lists/ListItem'
import {
  QueForm,
  CmtFormField,
  CommentBtn
} from '../components/Forms'
import colors from '../config/colors'
import moment from 'moment'
import * as Yup from 'yup'
import { DeleteAction } from '../components/Lists'
import deleteApi from '../api/deleteAcct'
import useAuth from '../auth/useAuth'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import navigationTheme from '../navigation/navigationTheme'

function ViewPostScreen ({ route }) {
  const post = route.params

  const { user } = useAuth()

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Field cannot be empty').min(1).label()
  })

  // Comment load and post

  const [message, setMessage] = useState([])

  useEffect(() => {
    loadMessage()
  }, [])

  const loadMessage = async () => {
    const messageOutput = await messageApi.getMessage()
    setMessage(messageOutput.data)
  }

  // Addd
  const handleSubmit = async ({ message }) => {
    const result = await messageApi.message(message)
    if (!result.ok) return Alert.alert('Please, try again')
  }


  return (
    <Screen>
      <ScrollView>

        <View style={styles.detailsContainer}>

          <AppText style={styles.category}> {post.category} Category </AppText>
          <AppText style={styles.title}>{post.title}</AppText>
          <AppText style={styles.body}>{post.body}</AppText>
          <AppText style={styles.time}>{moment(post.created_at).format('MMMM D, YYYY [at] h:mm A z')}</AppText>
          {/* <AppText style={styles.author}>{'Posted by: ' + user.data.name}</AppText> */}

          <View style={styles.userContainer} />
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  dContainer: {
    padding: 20
  },
  tag: {
    color: colors.black,
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  body: {
    color: colors.black,
    fontSize: 16,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  },
  category: {
    color: colors.orange,
    fontSize: 15,
    textAlign: 'left',
    left: -5
  },
  time: {
    color: colors.orange,
    fontSize: 13,
    textAlign: 'left',
    paddingTop: 6
  },
  author: {
    color: colors.orange,
    fontSize: 13,
    textAlign: 'left',
    paddingTop: 6
  },
  line: {
    backgroundColor: colors.orange,
    width: 370,
    height: 1,
    top: -20

  },
  colorin: {
    backgroundColor: colors.primary
  },
  button: {
    backgroundColor: colors.purple
  },
  text: {
    left: 5,
    top: -13,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  }

})

export default ViewPostScreen
