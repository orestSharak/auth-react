import React from 'react';
import Posts from "./Posts";


function Home() {

  return (
    <>
      <div className="container">
        <div className="p-5 mb-4 mt-5 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Home Page</h1>
          </div>
        </div>
      </div>
      <Posts/>
    </>
  );
};

export default Home;