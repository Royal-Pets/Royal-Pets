import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
// import { withAuth0 } from '@auth0/auth0-react';

export class Header extends React.Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Royal Pets</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#store">Store</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                {/* {isAuthenticated ? <LogoutButton/> : <LoginButton/>} */}

            </div>
        )
    }
}

export default Header
