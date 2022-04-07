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

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="hame">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          className="form-control"
          value={formik.values.channel}
          onChange={formik.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
