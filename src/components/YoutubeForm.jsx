import React from 'react'

import { useFormik } from 'formik'

const YoutubeForm = () => {
  const initialValues = { name: '', email: '', channel: '' }

  const onSubmit = (values) => {
    console.log('Form Data: ', values)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Ad Soyad gerekli.'
    }
    if (!values.email) {
      errors.email = 'Email gerekli.'
    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        values.email,
      )
    ) {
      errors.email = 'Email formatı hatalı.'
    }

    if (!values.channel) {
      errors.channel = 'Channel gerekli.'
    }
    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  console.log('visited fields: ', formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="hame">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

export default YoutubeForm
