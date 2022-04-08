import React from 'react'
import { Field, ErrorMessage, FastField } from 'formik'
import TextError from '../TextError'

const CheckboxGroup = (props) => {
  const { label, name, options, ...rest } = props

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((opt, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  id={opt.key}
                  {...field}
                  value={opt.key}
                  checked={field.value.includes(opt.key)}
                />
                <label htmlFor={opt.key}>{opt.value}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CheckboxGroup
