import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, FormGroup, MenuItem, TextField, Typography, Container } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import API from '../../utils/API'
import './style.css'
var to = require('to-case')

function VehicleForm (props) {
  const useStyles = makeStyles({
    typography: {
      marginBottom: 15
    },
    formGroup: {
      marginBottom: 15
    },
    errorMessage: {
      color: 'red',
    }
  })
  const classes = useStyles()

  const VehicleFormSchema = Yup.object().shape({
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
          <Typography variant="h4" className={classes.typography}>{props.formTitle}</Typography>
          <Formik
            initialValues={{
              type: '',
              configurationCode: '',
              registrationNumber: '',
              callSign: ''
            }}
            validationSchema={VehicleFormSchema}
            onSubmit={values => {
              const selectedVehicle = props.vehicles.find(vehicle => {
                return vehicle.type === values.type
              })
              const vehicle = {
                type: values.type,
                configurationCode: values.configurationCode,
                registrationNumber: values.registrationNumber,
                callSign: to.upper(values.callSign),
                status: 'Serviceable',
                icon: selectedVehicle.icon,

                // TODO: Validate data types
                occupant: {},
                location: {},
                repairRequests: []
              }
              console.log(vehicle)

              // TODO: Add HTTP POST request
              API.createVehicle(vehicle)
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <FormGroup className={classes.formGroup}>
                  <Field name="type" as={TextField} select label="Type">
                    {props.vehicles.map(vehicle => <MenuItem key={vehicle.type} value={vehicle.type}>{vehicle.type}</MenuItem>)}
                  </Field>
                  {errors.type && touched.type ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="type" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="configurationCode" as={TextField} label="Configuration Code" />
                  {errors.configurationCode && touched.configurationCode ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="configurationCode" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="registrationNumber" as={TextField} label="Registration Number" />
                  {errors.registrationNumber && touched.registrationNumber ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="registrationNumber" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="callSign" as={TextField} label="Call Sign" />
                  {errors.callSign && touched.callSign ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="callSign" />
                    </span>
                  ) : null}
                </FormGroup>
                <Button type="submit">Create</Button>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

export default VehicleForm
