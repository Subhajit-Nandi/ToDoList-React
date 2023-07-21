import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
              <Navbar.Brand href="/ToDoList-React">{props.title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link href="/ToDoList-React/">Home</Nav.Link>
                      <Nav.Link href="/ToDoList-React/about">About</Nav.Link>
                  </Nav>
                  {props.searchBar? <Form className="d-flex">
                      <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                  </Form>: "No Search Bar"}
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
};


Header.defaultProps={
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes={
    title:PropTypes.string,
    searchBar:PropTypes.bool.isRequired
}
