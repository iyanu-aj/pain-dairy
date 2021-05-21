import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, TextInput } from 'react-native'
import { Screen, Card, AppText, ActivityIndicator } from '../components'
import colors from '../config/colors'
import postApi from '../api/post'
import useAuth from '../auth/useAuth'
import moment from 'moment'
import SearchBar from '../components/SearchBar'
// import { TextInput, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function MyPostScreen ({ navigation }) {
  const [isLoading, setisLoading] = useState(false)

  const [post, setPost] = useState([])

  const [masterData, setmasterData] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    setisLoading(true)
    const postOutput = await postApi.getPostALL()
    setisLoading(false)
    setmasterData(postOutput.data)
    setPost(postOutput.data)
  }

  const { user } = useAuth()

  // search filters
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setPost(newData.data)
      setSearch(text)
    } else {
      setPost(masterData)
      setSearch(text)
    }
  }

  // Refresh

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const [refreshing, setRefreshing] = useState(false)

  // call api for refresh
  const onRefresh = async () => {
    const postOutput = await postApi.getPostALL()
    setPost(postOutput.data)
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }

  // searchPost(textToSearch){
  //   alert(textToSearch)
  // }

  return (
    <Screen>
      <View style={styles.screen}>

        <ActivityIndicator visible={isLoading} size={43} />
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
  },
  search: {
    backgroundColor: colors.offwhite,
    borderRadius: 8,
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    height: 40,
    padding: 10,
    marginVertical: 10,
    top: -10
  },

  textInput: {
    fontSize: 15,
    color: colors.dark,
    width: '100%'
  },

  icon: {
    marginRight: 10,
    left: -20,
    right: 40
  }

})

export default MyPostScreen
