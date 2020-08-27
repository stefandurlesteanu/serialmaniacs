import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import brandLogo from '../layout/brandLogo.png';

export default function navBar() {
  return (
    <Navbar className='color-nav' expand='lg'>
      <Navbar.Brand href='#home'>
        <img
          src={brandLogo}
          width='50'
          height='50'
          className='d-inline-block align-top'
          alt='logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/shows'>Shows</Nav.Link>
          <Nav.Link href='#link'>Genres</Nav.Link>
          <NavDropdown title='More' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Best Shows</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Most Wanted</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>ActorPedia</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
