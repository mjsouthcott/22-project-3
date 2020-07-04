import React from 'react'
import { Button, Card, CardContent, FormGroup, MenuItem, TextField, Typography, Container } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import './style.css'
var to = require('to-case')

function UserForm (props) {
  const UserFormSchema = Yup.object().shape({
    role: Yup.string()
      .required('Required'),
    rank: Yup.string()
      .required('Required'),
    firstName: Yup.string()
      .matches('^[a-zA-Z][a-zA-Z-. ]*$', 'Must begin with a letter, and can only contain letters and spaces, - and .')
      .min(2, 'Minimum 2 letters')
      .max(30, 'Maximum 30 letters')
      .required('Required'),
    lastName: Yup.string()
      .matches('^[a-zA-Z][a-zA-Z-. ]*$', 'Must begin with a letter, and can only contain letters and spaces, - and .')
      .min(2, 'Minimum 2 letters')
      .max(30, 'Maximum 30 letters')
      .required('Required'),
    occupation: Yup.string()
      .required('Required'),
    username: Yup.string()
      .matches('^[a-zA-Z][a-zA-Z0-9]*$', 'Must begin with a letter, and can only contain letters and numbers')
      .min(8, 'Minimum 8 characters')
      .max(20, 'Maximum 20 characters')
      .required('Required'),
    password: Yup.string()
      .matches('^[a-zA-Z0-9!@#%$&]*$', 'Can only contain letters, numbers, !, @, #, $, % and &')
      .min(8, 'Minimum 8 characters')
      .max(20, 'Maximum 20 characters')
      .required('Required')
  })
 
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" style={{ marginBottom: 15 }}>{props.formTitle}</Typography>
          <Formik
            initialValues={{
              role: props.role,
              rank: '',
              firstName: '',
              lastName: '',
              occupation: '',
              username: '',
              password: ''
            }}
            validationSchema={UserFormSchema}
            onSubmit={values => {
              // TODO: Add HTTP POST request
              let body = values
              body.firstName = to.title(body.firstName).trim()
              body.lastName = to.title(body.lastName).trim()
              body.username = to.lower(body.username)
              console.log(body)
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="role" as={TextField} label="Role" InputProps={{ readOnly: true }} />
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="rank" as={TextField} select label="Rank">
                    {props.ranks.map(rank => <MenuItem key={rank} value={rank}>{rank}</MenuItem>)}
                  </Field>
                  {errors.rank && touched.rank ? (
                    <ErrorMessage name="rank" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="firstName" as={TextField} label="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <ErrorMessage name="firstName" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="lastName" as={TextField} label="Last Name" />
                    {errors.lastName && touched.lastName ? (
                    <ErrorMessage name="lastName" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="occupation" as={TextField} select label="Occupation">
                  {props.occupations.map(occupation => <MenuItem key={occupation} value={occupation}>{occupation}</MenuItem>)}
                  </Field>
                  {errors.occupation && touched.occupation ? (
                    <ErrorMessage name="occupation" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                <Field name="username" as={TextField} label="Username" />
                    {errors.username && touched.username ? (
                    <ErrorMessage name="username" />
                  ) : null}
                </FormGroup>
                <FormGroup style={{ marginBottom: 15 }}>
                  <Field name="password" as={TextField} label="Password" />
                    {errors.password && touched.password ? (
                    <ErrorMessage name="password" />
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

export default UserForm
