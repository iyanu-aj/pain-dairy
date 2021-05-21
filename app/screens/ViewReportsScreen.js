import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText, Screen } from '../components'
import colors from '../config/colors'
import moment from 'moment'


function ViewReportsScreen ({ route }) {
  // receiving data from records using the route
  const record = route.params

  return (
    <Screen>
      {/* <Image style={styles.image} source={listing.image} /> */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Date and Time: {moment(record.created_at).format('D MMMM, YYYY [at] h:mm A z')}</AppText>

        <AppText style={styles.tag}> Pain Condition: {record.pain_condition}</AppText>
        <AppText style={styles.tag}> Pain Level: {record.level}</AppText>
        <AppText style={styles.tag}> Pain Location: {record.location}</AppText>
        <AppText style={styles.tag}> Symptoms: {record.symptoms}</AppText>
        <AppText style={styles.tag}> Pain Description: {record.description}</AppText>
        <AppText style={styles.tag}> Triggers: {record.triggers}</AppText>
        <AppText style={styles.tag}> Medications: {record.medications}</AppText>
        <AppText style={styles.tag}> Interventions: {record.interventions}</AppText>
        <AppText style={styles.tag}> Duration: {record.timing}</AppText>
        <AppText style={styles.tag}> Location of occurence: {record.environment}</AppText>
        <AppText style={styles.tag}> Additional Notes: {record.notes}</AppText>
        <View style={styles.userContainer} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  tag: {
    color: colors.black,
    fontSize: 15,
    marginVertical: 10
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10

  },
  userContainer: {
    marginVertical: 40
  }
})

export default ViewReportsScreen
