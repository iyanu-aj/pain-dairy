import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Screen, Card, ActivityIndicator } from '.'
import colors from '../config/colors'
import postApi from '../api/post'
import useAuth from '../auth/useAuth'
import moment from 'moment'
import SearchBar from './SearchBar'


function PostListScreen ({ navigation }) {
  const [isLoading, setisLoading] = useState(false)

  const [post, setPost] = useState([])

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    setisLoading(true)
    const postOutput = await postApi.getPost()
    setisLoading(false)

    setPost(postOutput.data)
  }

  const { user } = useAuth()

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    const postOutput = await postApi.getPost()
    setPost(postOutput.data)
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }

  return (
    <Screen>
      <View style={styles.screen}>
        <SearchBar />
        <ActivityIndicator visible={isLoading} size={3} />

        <FlatList
          data={post.data}
          keyExtractor={(post_id) => post_id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              tag={item.body}
              subTitle={user.data.name}
              time={moment(item.created_at).format('MMMM D, YYYY [at] h:mm A z')}
              onPress={() => navigation.navigate('View', item)}
            />
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    padding: 20,
    backgroundColor: colors.white
  }
})

export default PostListScreen
