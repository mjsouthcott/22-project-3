import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, FormGroup, MenuItem, TextField, Typography, Container } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import './style.css'
var to = require('to-case')

function InspectionWorkOrderForm (props) {
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

  const InspectionWorkOrderFormSchema = Yup.object().shape({
    // TODO: Add validation schema
  })

  return (
    <Container maxWidth="sm">
    <Card>
      <CardContent>
        <Typography variant="h4" className={classes.typography}>{props.formTitle}</Typography>
        <Formik
          initialValues={{
            // TODO: Add initial values
          }}
          validationSchema={InspectionWorkOrderFormSchema}
          onSubmit={values => {
            const inspectionWorkOrder = {
              // TODO: Add properties
            }
            console.log(inspectionWorkOrder)
            
            // TODO: Add HTTP POST request
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              {/* TODO: Add form text fields */}

              <Button type="submit">Create</Button>
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

export default InspectionWorkOrderForm