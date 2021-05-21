import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { QueFormField, SubmitButton, QueForm } from '../components/Forms'
import { Screen } from '../components'
import colors from '../config/colors'
import * as Yup from 'yup'
import recordApi from '../api/record'

const validationSchema = Yup.object().shape({
  pain_condition: Yup.string().required().label('Conditon'),
  level: Yup.number().required().min(1, 'Must be between 1 - 10').max(10, 'Must be between 1 - 10').integer('Please, enter a number between 1 - 10').label('Pain level'),
  location: Yup.string().required().label('Pain Location'),
  symptoms: Yup.string().required().label('Symptoms'),
  description: Yup.string().required().label('Pain Description'),
  triggers: Yup.string().required().label('Pain trigger'),
  medications: Yup.string().required().label('This'),
  interventions: Yup.string().required().label('This'),
  timing: Yup.string().required().label('This'),
  environment: Yup.string().required().label('This')
})

function PainRecord () {
  const handleSubmit = async ({ pain_condition, level, location, symptoms, description, triggers, medications, interventions, timing, environment, notes }) => {
    const result = await recordApi.record(pain_condition, level, location, symptoms, description, triggers, medications, interventions, timing, environment, notes)
    if (!result.ok) return Alert.alert('Please, try again')
    else Alert.alert('Report Submitted')
  }

  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <View>
          <QueForm
            initialValues={{
                pain_condition: '',
                level: '',
                location: '',
                symptoms: '',
                description: '',
                triggers: '',
                medications: '',
                interventions: '',
                timing: '',
                environment: '',
                notes: ''
              }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >

            <Text style={styles.question1Text}>
              1. What is your pain condition?
            </Text>

            <QueFormField
              name='pain_condition'
              placeholder='Type'
            />
            <Text style={styles.question1Text}>
              2. What level is your pain right now?
            </Text>

            <QueFormField
              name='level'
              placeholder='Level: From 1 - 10'
              keyboardType='numeric'
            />
            <Text style={styles.question1Text}>
              3. Where does it hurt?
            </Text>
            <QueFormField
              name='location'
              placeholder='Location'
            />
            <Text style={styles.question1Text}>
              4. What besides pain are you feeling?
            </Text>
            <QueFormField
              name='symptoms'
              placeholder='Symptoms'
            />
            <Text style={styles.question1Text}>
              5. What word best describes your pain?
            </Text>
            <QueFormField
              name='description'
              placeholder='Description'
            />
            <Text style={styles.question1Text}>
              6. What worsened the pain?
            </Text>
            <QueFormField
              name='triggers'
              placeholder='Triggers'
            />
            <Text style={styles.question1Text}>
              7. What type of medication do you use?
            </Text>
            <QueFormField
              name='medications'
              placeholder='Medication'
            />
            <Text style={styles.question1Text}>
              8. What besides medication have you tried?
            </Text>
            <QueFormField
              name='interventions'
              placeholder='Interventions'
            />
            <Text style={styles.question1Text}>
              9. How long did the pain last?
            </Text>
            <QueFormField
              name='timing'
              placeholder='Duration'
            />
            <Text style={styles.question1Text}>
              10. Where were you during the pain?
            </Text>
            <QueFormField
              name='environment'
              placeholder='Your location'
            />

            <Text style={styles.question1Text}>
              Notes
            </Text>
            <QueFormField
              name='note'
              placeholder='Click to add notes'
            />
            <SubmitButton title='Submit' />
          </QueForm>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 400,
    width: 40,
    flex: 1
  },
  question1Text: {
    color: '#121212',
    width: 400,
    height: 25,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 14
  },
  scrollView: {
    backgroundColor: colors.white,
    marginHorizontal: 5,
    height: 705
  },
  painRecordQuestion1: {
    width: '95%',
    height: 160,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 9,
    marginLeft: 10,
    marginTop: 35
  }

})

export default PainRecord
