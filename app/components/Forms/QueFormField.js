import React from 'react'
import { useFormikContext } from 'formik'

import QTextInput from '../QTextInput'
import ErrorMessage from './ErrorMessage'

function QueFormField ({ name, height, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
      <QTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        height = {height}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default QueFormField
