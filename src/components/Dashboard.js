import React, {useState} from 'react';
import {Alert, Button, Card, Container} from "react-bootstrap";
import {useAuth} from "../context/AuthContext";
import Posts from "./Posts";


function Dashboard() {

  const [error] = useState('');
  const {currentUser, incrementCounter, decrementCounter} = useAuth();


  return (
    <Container className="d-flex flex-column align-items-center mt-5" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Body className="text-center">
            <h2 className="mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Name:</strong> {currentUser.displayName}
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        </div>
        <div className="d-flex justify-content-between mb-5">
          <Button className="w-25 mt-4" onClick={incrementCounter}>Add post</Button>
          <Button className="w-50 alert-danger mt-4" onClick={decrementCounter}>Delete
            post</Button>
        </div>
        <Posts/>
      </div>
    </Container>
  );
};

export default Dashboard;