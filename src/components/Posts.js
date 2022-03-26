import React, {useEffect, useState} from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {useAuth} from "../context/AuthContext";

const Posts = () => {


  const {counter} = useAuth();
  const [posts, setPosts] = useState([]);


  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${counter}`);
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.log("Fetch Data Posts failed: ", e);
      }
    }
    fetchData();
  }, [counter]);



  const allPosts = posts
    .map(post => <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>);

  return (
    <Container className="d-flex flex-column align-items-center mt-5" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <ListGroup>
          {allPosts}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Posts;