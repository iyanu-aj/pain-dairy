import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { Screen, Header, Footer } from '../components'
import { ListItem, ListItemSeparator, DeleteAction } from '../components/Lists'

const initialMessages = [
  {
    id: 1,
    title: 'My first pain',
    description: 'Lorem ipsum',
    image: require('../assets/avatar.png')
  },
  {
    id: 2,
    title: 'My second experience',
    description: 'Lorem ipsum',
    image: require('../assets/avatar.png')
  }
]

function MessagesScreen ({ navigation }) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    // Delete the message from messages
    // Call the server to delete from the backend
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      {/* <Header text='MESSAGES'/> */}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate('Chat', item)}
            renderRightActions={() => (
              <DeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          // Simulated messages
          setMessages([
            {
              id: 2,
              title: 'My pain records',
              description: 'My pain description',
              image: require('../assets/avatar.png')
            }
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  
})

export default MessagesScreen
