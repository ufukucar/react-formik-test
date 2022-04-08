import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Email zorunludur'),
    password: Yup.string().required('Şifre zorunludur'),
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
      {(formik) => {
        return (
          <Form className="mt-5">
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <button className="submit" type="button" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
