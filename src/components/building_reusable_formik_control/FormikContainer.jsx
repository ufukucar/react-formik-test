import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const initialValues = {
    email: '',
    description: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email zorunludur'),
    description: Yup.string().required('Açıklama zorunludur'),
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

          <button className="submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
