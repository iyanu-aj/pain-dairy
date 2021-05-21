import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from '../AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ListItemMyPosts ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.bordercol} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title} </AppText>
            <AppText style={styles.tag} numberOfLines={2}> {tag}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle} </AppText>
}
          </View>
          <MaterialCommunityIcons
            color={colors.dark}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  tag: {
    color: colors.black,
    fontSize: 12,
  },
  time: {
    color: colors.orange,
    fontSize: 11,
    textAlign: 'left',
    paddingTop: 6
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItemMyPosts
