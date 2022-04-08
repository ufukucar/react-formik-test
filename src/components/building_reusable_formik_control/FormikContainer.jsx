import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email zorunludur'),
    description: Yup.string().required('Açıklama zorunludur'),
    selectOption: Yup.string().required('Seçim zorunludur'),
  })
  const onSubmit = (values) => {
    console.log('Form Data: ', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="mt-5">
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          {/* Textarea */}
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          {/* Select */}

          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />

          <button className="submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
