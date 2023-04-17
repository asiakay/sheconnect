import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from '../../lib/firebaseConfig';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
<Navbar key={isMounted ? 'mounted' : 'not-mounted'} bg="light" expand="lg">
        <Container>
        <Navbar.Brand className="navbar-brand" href="/">SheConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={`/profile/${userId}`}>Profile</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/profile/${userId}`}>Profile</NavDropdown.Item>
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
