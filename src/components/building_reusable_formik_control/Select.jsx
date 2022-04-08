import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Select = (props) => {
  const { label, name, options, ...rest } = props
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest} />
    </div>
  )
}

export default Select
