import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: '1', value: 'Select 1' },
    { key: '2', value: 'Select 2' },
    { key: '3', value: 'Select 3' },
  ]

  const radioOption = [
    { key: '1', value: 'Radio Option 1' },
    { key: '2', value: 'Radio Option2' },
    // { key: 'radioKey3', value: 'Radio Option 3' },
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email zorunludur'),
    description: Yup.string().required('Açıklama zorunludur'),
    selectOption: Yup.string().required('Seçim zorunludur'),
    radioOption: Yup.string().required('Radio Seçim zorunludur'),
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

          {/* Radio */}

          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOption}
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
