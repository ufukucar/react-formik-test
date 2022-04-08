import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

const Select = (props) => {
  const { label, name, options, ...rest } = props
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((opt, index) => {
          return (
            <option key={opt.index} value={opt.value}>
              {opt.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
