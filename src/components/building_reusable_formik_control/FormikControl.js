import React from 'react'
import Input from './Input'

function FormikControl(props) {
  const { control, ...rest } = props

  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return
    case 'select':
      return
    case 'checkbox':
      return
    case 'radio':
      return
    case 'file':
      return
    case 'date':
      return

    default:
      return null
  }
}

export default FormikControl
