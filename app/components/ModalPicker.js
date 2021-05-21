import React from 'react'
import {
  StyleSheet,
  Text,
  View, TouchableOpacity, Dimensions, ScrollView, SafeAreaView
} from 'react-native'
import colors from '../config/colors'

const OPTIONS = ['RED', 'BLUE', 'YELLOW', 'E', 'ERER', 'REAR']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false)
    props.setData(option)
  }

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  })
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / -80 }]}>
        <ScrollView>
          {option}
        </ScrollView>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
    paddingLeft: 30,
    paddingRight: 30
  },
  modal: {
    backgroundColor: colors.offwhite,
    borderRadius: 10

  },
  option: {
    alignItems: 'flex-start'
  },
  text: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export { ModalPicker }
