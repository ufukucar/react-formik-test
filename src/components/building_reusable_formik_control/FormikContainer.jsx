import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const initialValues = {
    email: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email zorunludur'),
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
          <button className="submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
