import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap"

class Home extends Component{
    render(){
        return(
    <Navbar bg="light" expand="lg">
    <Container className="justify-content-between">
        <Navbar.Brand href="/">LAPKART</Navbar.Brand>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#home">Like</Nav.Link>
        <Nav.Link href="#link">Cart</Nav.Link>
        <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
        )
    }
}

export default Home;