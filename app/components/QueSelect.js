import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  Modal, TouchableOpacity, SafeAreaView
} from 'react-native'
import { ModalPicker } from './ModalPicker'
import colors from '../config/colors'

const QueSelect = () => {
  const [chooseData, setchooseData] = useState('Select an Option...')
  const [isModalVisible, setisModalVisible] = useState(false)

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }
  const setData = (option) => {
    setchooseData(option)
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={styles.touchableOpacity}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20
  },
  text: {
    marginVertical: 10,
    fontSize: 13
  },
  touchableOpacity: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 9
  }
})

export default QueSelect
