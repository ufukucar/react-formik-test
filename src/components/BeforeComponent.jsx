import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const BeforeComponent = () => {
  const initialValues = { name: '', email: '', channel: '' }

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

  const formik = useFormik({
    initialValues,
    onSubmit,
    //validate,
    validationSchema,
  })

  //console.log('visited fields: ', formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="hame">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="error">{formik.errors.name}</span>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <span className="error">{formik.errors.channel}</span>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BeforeComponent
