import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const YoutubeForm = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
  }

  const onSubmit = (values) => {
    console.log('Form Data: ', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Ad Soyad gerekli.'),
    email: Yup.string()
      .email('Email formatı hatalı.')
      .required('Email gerekli.'),
    channel: Yup.string().required('Channel gerekli.'),
  })

  //console.log('visited fields: ', formik.touched)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="hame">Name</label>
          <Field type="text" name="name" id="name" />

          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />

          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />

          <ErrorMessage name="channel" component="div" className="error" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" component="div" className="error" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Adress</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props
              console.log('render props: ', props)
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
