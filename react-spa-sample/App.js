import React from 'react';
import { connect } from 'react-redux'
import { load } from './user'

import { AppBar, Toolbar, Avatar, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'

// Decorator for connect
@connect(
    (state) => (
        {
            users: state.user.users,
        }
    ),
    { load }
)

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            open: false,
            user: null,
        }
    }

    componentWillMount() {
        this.props.load()
    }

    handleClickOpen (user) {
        this.setState(
            {
                open: true,
                user: user,
            }
        )
    }

    handleRequestClose() {
        this.setState(
            {
                open: false,
            }
        )
    }

    render () {
        const { users } = this.props
        return (
            <div>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <Typography type='title' color='inherit'>
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>

                { users && users.map((user) => {
                    return (
                        <Card key={user.email} style={{marginTop: '10px'}}>
                            <CardContent style={{color: '#408040'}}>
                                <Avatar src={user.picture.thumbnail} />
                                <p style={{margin: '10px'}}>Name: {user.name.first + ' ' + user.name.last}</p>
                                <p style={{margin: '10px'}}>Gender: {user.gender}</p>
                                <div style={{textAlign: 'right'}}>
                                    <Button onClick={() => { this.handleClickOpen(user) }}>
                                        <Email />
                                        Send Email
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
                {
                    this.state.open &&
                    <Dialog open={this.state.open} onClose={() => {this.handleRequestClose()}}>
                        <DialogTitle>Email Address</DialogTitle>
                        <DialogContent>{this.state.user.email}</DialogContent>
                    </Dialog>
                }
            </div>
        )
    }
}