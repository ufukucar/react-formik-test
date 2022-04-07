import React from 'react'

import { useFormik } from 'formik'

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },

    onSubmit: (values) => {
      console.log('Form Data: ', values)
    },
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
