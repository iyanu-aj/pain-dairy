import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText'
import Screen from './Screen'
import defaultStyles from '../config/styles'
import PickerItem from './PickerItem'
import colors from '../config/colors'

function AppPicker ({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.black}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.dark}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bordercol,
    borderRadius: 5,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    padding: 12,
    marginVertical: 5
  },
  icon: {
    marginRight: 10
  },
  text: {
    flex: 1
  }
})

export default AppPicker
