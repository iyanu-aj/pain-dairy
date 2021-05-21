import React from 'react'
import { Formik } from 'formik'
import { FlatList } from 'react-native-gesture-handler'

function QueForm ({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}

export default QueForm
