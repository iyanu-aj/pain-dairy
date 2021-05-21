import React from 'react'
import { TouchableOpacity, StatusBar, StyleSheet, View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { Screen } from '../components'

function HomepageScreen ({ navigation }) {
  return (

    <Screen>
      {/* <View> */}

      <View style={styles.scrollView}>
        <TouchableOpacity
          style={styles.addpainrecbtn}
          onPress={() => navigation.navigate('Pain')}
        >

          <View style={styles.rect8}>
            <Text style={styles.text22}>
              ADD PAIN RECORD{'\n'}Input your pain details
            </Text>
          </View>
          <MaterialIcons
            name='add-circle-outline'
            style={styles.icon4}
          />
        </TouchableOpacity>

      </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    // backgroundColor: colors.light,
    marginHorizontal: 10,
    height: 705

  },
  text: {
    fontSize: 42
  },
  addpainrecbtn: {
    height:197,
    left: 16,
    position: 'absolute',
    width: '92%',
    backgroundColor: colors.purple,
    top: 250,
    justifyContent: 'center',
    borderRadius: 25,
    overflow: 'hidden'
  },
  rect8: {
    height: 62,
    backgroundColor: 'rgba(21,19,19,0.5)',
    justifyContent: 'center'
  },
  text22: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center'
  },
  icon4: {
    color: colors.white,
    fontSize: 40,
    flex: 1,
    marginBottom: -2,
    marginTop: 52,
    marginLeft: '46%'
  },
  reportBtn1: {
    height: 197,
    left: 16,
    position: 'absolute',
    width: '92%',
    backgroundColor: colors.orange,
    top: 255,
    justifyContent: 'center',
    borderRadius: 25,
    overflow: 'hidden'
  },
  rect83: {
    height: 62,
    backgroundColor: 'rgba(21,19,19,0.5)',
    justifyContent: 'center'
  },
  text24: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center'
  },
  icon2: {
    color: colors.white,
    fontSize: 40,
    flex: 1,
    marginBottom: -2,
    marginTop: 52,
    marginLeft: '46%'
  },

  communityBtn: {
    height: 197,
    left: 16,
    position: 'absolute',
    width: '92%',
    backgroundColor: colors.pink,
    top: 470,
    justifyContent: 'center',
    borderRadius: 25,
    overflow: 'hidden'
  },
  rect85: {
    height: 62,
    backgroundColor: 'rgba(21,19,19,0.5)',
    justifyContent: 'center'
  },
  text26: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center'
  },
  icon3: {
    color: colors.white,
    fontSize: 40,
    flex: 1,
    marginBottom: -2,
    marginTop: 52,
    marginLeft: '46%'
  }
})
export default HomepageScreen
