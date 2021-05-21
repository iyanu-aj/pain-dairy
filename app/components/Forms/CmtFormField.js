import React from 'react'
import { useFormikContext } from 'formik'

import CTextInput from '../CTextInput'
import ErrorMessage from './ErrorMessage'

function CmtFormField ({ name, height, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      <CTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        height = {height}
      />

    </>
  )
}

export default CmtFormField
