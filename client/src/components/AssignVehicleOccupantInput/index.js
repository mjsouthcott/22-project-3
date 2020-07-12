import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, FormGroup, MenuItem, TextField, Container } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import API from '../../utils/API'
import './style.css'

function AssignVehicleOccupantInput (props) {
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

  const UserFormSchema = Yup.object().shape({
    occupant: Yup.string()
      .required('Required')
  })
 
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Formik
            initialValues={{
              occupant: ''
            }}
            validationSchema={UserFormSchema}
            onSubmit={values => {
              
              console.log(values.occupant)

              // TODO
              // API.saveUser(user)
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <FormGroup className={classes.formGroup}>
                  <Field name="occupant" as={TextField} select label="Assign Occupant">
                    {props.users.map(user => <MenuItem key={user._id} value={user._id}>{`${user.rank} ${user.firstName} ${user.lastName}`}</MenuItem>)}
                  </Field>
                  {errors.occupant && touched.occupant ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="occupantId" />
                    </span>
                  ) : null}
                </FormGroup>
                <Button type="submit">Assign</Button>
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

export default AssignVehicleOccupantInput
