import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";


const NavbarComponent = () => {
  const navigate = useNavigate();
  const {logout, currentUser} = useAuth();


  async function handleLogOut() {

    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log("Log out error: ", e)
    }
  }

  let style = {
    textDecoration: 'none',
    color: "white",
    active: {
      color: "red"
    }


  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
          {!currentUser && <Nav.Link as={Link} to='/login'>Log In</Nav.Link>}
          {currentUser && <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>}
          <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;