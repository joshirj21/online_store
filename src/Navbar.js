import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap"
import {Link} from "react-router-dom";

class MyNavbar extends Component{
    render(){
        return(
    <Navbar bg="light" expand="lg">
    <Container className="justify-content-between">
        <Navbar.Brand><Link exact to="/" activeStyle={{textDecoration:"none"}} style={{textDecoration:"none"}}>Shopping Kart</Link></Navbar.Brand>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary"><i className="fas fa-search"></i></Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#home"><i className="far fa-heart"></i></Nav.Link>
        <Nav.Link><Link exact to="/cart"><i className="fas fa-shopping-cart"></i></Link></Nav.Link>
        <NavDropdown title={<i className="far fa-user"></i>} id="basic-nav-dropdown">
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

export default MyNavbar;