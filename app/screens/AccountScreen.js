// Account screen
import React, { } from 'react'
import { StyleSheet, View, FlatList, Alert, LogBox } from 'react-native'
import { ListItem, ListItemSeparatorComponent } from '../components/Lists'
import colors from '../config/colors'
import { Icon, Screen, AppText } from '../components'
import useAuth from '../auth/useAuth'

import deleteApi from '../api/deleteAcct'
// import useAuth from '../auth/useAuth'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs()
const menuItems = [
  {
    title: 'Posts',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    },
    targetScreen: 'MyPosts'
  }
]

function AccountScreen ({ navigation }) {
  const { user, logOut } = useAuth()

  const handleDelete = async () => {
    const result = await deleteApi.deleteAccount()
    if (!result.ok) return Alert.alert('Please, try again')
    else logOut()
  }

  return (
    <Screen>
      <View style={{ height: 100, backgroundColor: colors.primary, top: -57 }}>
        <AppText style={styles.text}> Account </AppText>
      </View>
      <View style={styles.container}>
        <ListItem
          title={'Name: ' + user.data.name}
          subTitle={'Email Address: ' + user.data.email}
          image={require('../assets/account-circle.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#913c60' />}
        onPress={() => Alert.alert('Confirm', 'Are you sure you want to Log Out?', [
          { text: 'Yes', onPress: () => logOut() },
          { text: 'No', onPress: () => console.log('No') }
        ])}
      />
      <View style={styles.delete}>

        <ListItem
          style={styles.button}
          title='Delete Account'
          IconComponent={<Icon name='trash-can' backgroundColor='#ff5252' />}
          onPress={() => Alert.alert('Confirm', 'Are you sure you want to delete your account?', [
            { text: 'Yes', onPress: () => handleDelete() },
            { text: 'No', onPress: () => console.log() }
          ])}
        />
      </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.bordercol
  },
  container: {
    marginVertical: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.offwhite

  },
  text: {
    height: 100,
    top: 65,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  delete: {
    width: 300,
    marginVertical: 240,
    marginBottom: 10,
    borderWidth: 8,
    borderColor: colors.orange,
    backgroundColor: colors.orange
  }
})

export default AccountScreen
