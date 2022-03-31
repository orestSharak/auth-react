import React, {useRef, useState} from 'react';
import {Alert, Button, Card, Container, Form} from 'react-bootstrap';
import {useAuth} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";


function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (e) {
      setError("Failed to log in");
      console.log('handleSubmit error: ', e);
    }
    setLoading(false);
  }


  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "calc(100vh - 68px)"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required/>
              </Form.Group>
              <Button className="w-100 mt-4" type="submit" disabled={loading}>Log In</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}

export default Login;