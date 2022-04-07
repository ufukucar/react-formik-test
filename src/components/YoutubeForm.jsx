import React from 'react'

import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const YoutubeForm = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: '',
    },
    phoneNumbers: ['', ''],
    phNumbers: [
      {
        cep: '',
        ev: '',
      },
    ], // For FieldArray
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

          <ErrorMessage name="name" component={TextError} className="error" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />

          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
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
              // console.log('render props: ', props)
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" name="social.facebook" id="facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter Profile</label>
          <Field type="text" name="social.twitter" id="twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" name="phoneNumbers[0]" id="primaryPh" />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary Phone Number</label>
          <Field type="text" name="phoneNumbers[1]" id="secondaryPh" />
        </div>

        <div className="form-control">
          <label htmlFor="">List of phone Numbers - FormArray</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              // console.log('fieldArrayProps: ', fieldArrayProps)
              const { push, remove, form } = fieldArrayProps
              const { values } = form
              const { phNumbers } = values
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumber.${index}.cep`} placeholder="cep" />
                      <Field name={`phNumber.${index}.ev`} placeholder="ev" />
                      {phNumbers.length > 1 && (
                        <button type="button" onClick={() => remove(index)}>
                          Çıkart
                        </button>
                      )}
                      <button type="button" onClick={() => push('')}>
                        Ekle
                      </button>
                    </div>
                  ))}
                </div>
              )
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
