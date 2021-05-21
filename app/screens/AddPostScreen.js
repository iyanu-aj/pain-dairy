import React from 'react'
import { Alert } from 'react-native'
import * as Yup from 'yup'
import postApi from '../api/post'
import {
  AppForm,
  AppFormField,
  SubmitButton
} from '../components/Forms'
import { Screen } from '../components'

// Validation with Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  body: Yup.string().required().min(1).label('Details'),
  category: Yup.string().required().min(1).label('Category')
})

function AddPostScreen ({ navigation }) { // pass a navigation funtion
  const handleSubmit = async ({ category, title, body }) => { // sync with the API to get a response
    const result = await postApi.post(category, title, body)
    if (!result.ok) return Alert.alert('Please, try again')
    else navigation.navigate('Feed')
  }

  // Import from Form reuseable component
  return (
    <Screen>
      <AppForm
        initialValues={{
          category: '',
          body: '',
          title: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />

        <AppFormField
          maxLength={10000}
          name='body'
          multiline
          numberOfLines={3}
          placeholder='Details'
          height={190}
        />
        <AppFormField maxLength={15} name='category' placeholder='Category' />

        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  )
}

export default AddPostScreen
