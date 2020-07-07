import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, FormGroup, MenuItem, TextField, Typography, Container, Divider } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from "yup"
import './style.css'
import inspectionItems from '../../utils/inspectionItems'
import inspectionItemStatuses from '../../utils/inspectionItemStatuses'
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
    },
    divider: {
      marginBottom: 15
    }
  })
  const classes = useStyles()

  const InspectionWorkOrderFormSchema = Yup.object().shape({
    inspectionItems: Yup.array().of(
      Yup.object().shape({
        subsystems: Yup.array().of(
          Yup.object().shape({
            status: Yup.string()
              .required('Required'),
            recommendedAction: Yup.string()
              .when('status', {
                is: 'M',
                then: Yup.string()
                  .min(5, "Minimum 5 characters")
                  .max(255, "Maximum 255 characters")
                  .required('Required')
              })
          })
        )
      })
    )
  })

  return (
    <Container maxWidth="sm">
    <Card>
      <CardContent>
        <Typography variant="h4" className={classes.typography}>Create Inspection Work Order</Typography>
        <Formik
          initialValues={{inspectionItems}}
          validationSchema={InspectionWorkOrderFormSchema}
          onSubmit={values => {
            const inspectionWorkOrder = values

            console.log(inspectionWorkOrder)
            
            // TODO: Add HTTP POST request
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              {inspectionItems.map((system, index1) => (
                <React.Fragment>
                  {/* System heading */}
                  <Typography variant="h5" className={classes.typography}>{system.serial}. {system.description}</Typography>
                  {system.subsystems.map((subsystem, index2) => (
                    <React.Fragment>
                      {/* Subsystem heading */}
                      <Typography variant="h6" className={classes.typography}>{subsystem.serial.slice(subsystem.serial.length - 1)}. {subsystem.description}</Typography>
                      {/* Subsystem status TextField */}
                      <FormGroup className={classes.formGroup}>
                        <Field name={`inspectionItems.${index1}.subsystems.${index2}.status`} as={TextField} select label="Status">
                          {inspectionItemStatuses.map(status => <MenuItem key={status.code} value={status.code}>{status.code}</MenuItem>)}
                        </Field>
                        {/* {errors.inspectionItems[index1].subsystems[index2].status && touched.inspectionItems[index1].subsystems[index2].status ? ( */}
                          <span className={classes.errorMessage}>
                            <ErrorMessage name={`inspectionItems.${index1}.subsystems.${index2}.status`} />
                          </span>
                        {/* ) : null} */}
                      </FormGroup>
                      {/* Subsystem recommended action TextField */}
                      {values.inspectionItems[index1].subsystems[index2].status === "M" && 
                        <FormGroup className={classes.formGroup}>
                          <Field name={`inspectionItems.${index1}.subsystems.${index2}.recommendedAction`} as={TextField} label="Recommended Action" />
                          {/* {errors.inspectionItems[index1].subsystems[index2].recommendedAction && touched.inspectionItems[index1].subsystems[index2].recommendedAction ? ( */}
                            <span className={classes.errorMessage}>
                              <ErrorMessage name={`inspectionItems.${index1}.subsystems.${index2}.recommendedAction`} />
                            </span>
                          {/* ) : null} */}
                        </FormGroup>
                      }
                    </React.Fragment>
                  ))}
                  <Divider className={classes.divider}/>
                </React.Fragment>
              ))}
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

export default InspectionWorkOrderForm