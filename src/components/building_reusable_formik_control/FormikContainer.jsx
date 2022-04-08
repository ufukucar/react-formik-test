import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'select_1', value: 'Select 1' },
    { key: 'select_2', value: 'Select 2' },
    { key: 'select_3', value: 'Select 3' },
  ]

  const radioOptions = [
    { key: 'radio_1', value: 'Radio Option 1' },
    { key: 'radio_2', value: 'Radio Option2' },
    // { key: 'radioKey3', value: 'Radio Option 3' },
  ]
  const checkBoxOptions = [
    { key: 'checkbox_1', value: 'Checkbox Option 1' },
    { key: 'checkbox_2', value: 'Checkbox Option2' },
    { key: 'checkbox_3', value: 'Checkbox Option3' },
    // { key: 'radioKey3', value: 'Radio Option 3' },
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkBoxOption: [],
    birthDate: null,
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email zorunludur'),
    description: Yup.string().required('Açıklama zorunludur'),
    selectOption: Yup.string().required('Seçim zorunludur'),
    radioOption: Yup.string().required('Radio Seçim zorunludur'),
    checkboxOption: Yup.array().min(1, 'Lütfen bir tane işaretleyin'),
    birthDate: Yup.date().required('Doğum tarihi zorunludur').nullable(),
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
            label="Radio topics"
            name="radioOption"
            options={radioOptions}
          />

          {/* Checkbox */}

          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkBoxOption"
            options={checkBoxOptions}
          />

          {/* Date Picker */}
          <FormikControl control="date" label="Birth Date ?" name="birthDate" />
          <button className="submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
