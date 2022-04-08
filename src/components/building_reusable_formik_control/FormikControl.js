import React from 'react'

function FormikControl(props) {
  const { control } = props

  switch (control.type) {
    case 'input':
      return
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
