import React from 'react'

import { withStyles } from 'material-ui/styles'
import { AppBar,Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'
import { Field, reduxForm } from 'redux-form'
import { error } from 'util'

const FormTextField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => {
    const isError = !!(touched && error)
    return (
        <TextField style={{margin: 5}} error={isError} label={label} helperText={isError ? error : null} {...input} type={type} />
    )
}

@reduxForm({
    form: 'syncValidation',
    validate: values => {
        const errors = {}
        if (!values.firstname) {
            errors.firstname = 'required'
        }
        if (!values.lastname) {
            errors.lastname = 'required'
        }
        if (!values.email) {
            errors.email = 'required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'invalid format'
        }

        return errors
    }
})

export default class TodoPage extends React.Component {
    constructor(props) {
        super(props)
        this.sendItems = this.sendItems.bind(this)
    }

    handlePageMove(path) {
        this.props.history.push(path)
    }

    sendItems(values) {
        const user = {
            firstname: values.firstname,
            lastname: values.lastname,
            gender: values.gender || 'not set',
            email: values.email
        }

        // Send data
        console.log(user)
    }

    render () {
        const { handleSubmit, submitting } = this.props

        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                        ToDo Page
                        </Typography>
                    </Toolbar>
                    <Button style={{color: '#fff', position: 'absolute', top: 15, right: 0}} onClick={() => { this.handlePageMove('/') }}>
                        Go to top page
                    </Button>
                </AppBar>
                <Card style={{padding: 10}}>
                    <form onSubmit={handleSubmit(this.sendItems)}>
                        <Field name="firstname" type="text" component={FormTextField} label="First Name" />
                        <Field name="lastname" type="text" component={FormTextField} label="Last Name" />
                        <div style={{margin: 5}}>
                            <label style={{marginRight: 5}}>Gender:</label>
                            <span>
                                <Field name="gender" component="select">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                            </span>
                        </div>
                        <Field name="email" type="email" component={FormTextField} label="Email" />
                        <br />
                        <Button style={{marginTop: 10}} raised="true" type="submit" disabled={submitting}>Submit</Button>
                    </form>
                </Card>
            </div>
        )
    }
}
