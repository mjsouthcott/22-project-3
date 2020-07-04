import React from 'react'
import { Button, Card, CardContent, FormGroup, MenuItem, TextField, Typography, Container } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import './style.css'
var to = require('to-case')

function EquipmentForm (props) {
  const EquipmentFormSchema = Yup.object().shape({
    type: Yup.string()
      .required('Required'),
    configurationCode: Yup.string()
      .matches('^[0-9]*$', 'Can only contain numbers')
      .min(6, 'Must be 6 characters')
      .max(6, 'Must be 6 characters')
      .required('Required'),
    registrationNumber: Yup.string()
      .matches('^[0-9]*$', 'Can only contain numbers')
      .min(5, 'Must be 5 characters')
      .max(5, 'Must be 5 characters')
      .required('Required'),
    callSign: Yup.string()
      .matches('^[a-zA-Z0-9]*$', 'Can only contain letters and numbers')
      .min(1, 'Minimum 1 character')
      .max(4, 'Maximum 4 characters')
      .required('Required')
  })

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" style={{ marginBottom: 15 }}>{props.formTitle}</Typography>
          <Formik
            initialValues={{
              type: '',
              configurationCode: '',
              registrationNumber: '',
              callSign: ''
            }}
            validationSchema={EquipmentFormSchema}
            onSubmit={values => {
              // TODO: Add HTTP POST request
              let body = values
              body.callSign = to.upper(body.callSign)
              body.status = 'Serviceable'
              let selectedType = props.types.find(type => {
                return type.type === body.type
              })
              body.icon = selectedType.icon
              body.occupant = {}
              console.log(body)
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="type" as={TextField} select label="Type">
                    {props.types.map(type => <MenuItem key={type.type} value={type.type}>{type.type}</MenuItem>)}
                  </Field>
                  {errors.type && touched.type ? (
                    <ErrorMessage name="type" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="configurationCode" as={TextField} label="Configuration Code" />
                  {errors.configurationCode && touched.configurationCode ? (
                    <ErrorMessage name="configurationCode" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="registrationNumber" as={TextField} label="Registration Number" />
                  {errors.registrationNumber && touched.registrationNumber ? (
                    <ErrorMessage name="registrationNumber" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="callSign" as={TextField} label="Call Sign" />
                  {errors.callSign && touched.callSign ? (
                    <ErrorMessage name="callSign" />
                  ) : null}
                </FormGroup>
                <Button type="submit">Submit</Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

export default EquipmentForm
