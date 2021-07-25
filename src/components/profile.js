import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <>
                {isAuthenticated &&
                    <>

                        <Card bg="secondary" text="white" style={{ width: '18rem', margin: '25px' }}>
                            <Card.Header>Hello</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img
                                        src={user && user.picture}
                                        alt="Profile"
                                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" /><br />
                                    {user.name} <br />
                                    {user.email}
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </>


                }
                <div style={{ margin: '25px', textAlign: 'center' }}>
                    <Button onClick={this.props.requestFunc} variant="primary">request</Button>

                    <Button style={{ marginLeft: '30px', marginRight: '30px' }} onClick={this.props.somthingFunc} variant="success">somthing</Button>

                    <Button onClick={this.props.showanotherpage} variant="warning">anotherpage</Button>
                </div>
            </>
        );
    }
}

export default withAuth0(Profile);