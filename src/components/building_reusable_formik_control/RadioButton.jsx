import React from 'react'
import { Field, ErrorMessage, FastField } from 'formik'
import TextError from '../TextError'

const RadioButton = (props) => {
  const { label, name, options, ...rest } = props

  return (
    <div className="form-control">
      <label>{label}</label>
      <FastField name={name} {...rest}>
        {({ field }) => {
          return options.map((opt, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={opt.key}
                  {...field}
                  value={opt.key}
                  className={field.key === opt.key ? 'is-valid' : ''}
                />
                <label htmlFor={opt.key}>{opt.value}</label>
                <br />
              </React.Fragment>
            )
          })
        }}
      </FastField>

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default RadioButton
