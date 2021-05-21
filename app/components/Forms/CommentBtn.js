import React from 'react';
import { useFormikContext } from 'formik';

import CommentButton from '../CommentButton';

function CommentBtn ({ title }) {
  const { handleSubmit } = useFormikContext()

  return <CommentButton title={title} onPress={handleSubmit} />
}

export default CommentBtn
