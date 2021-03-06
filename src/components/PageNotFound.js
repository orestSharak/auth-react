import React from 'react';
import Posts from "./Posts";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="p-5 mb-4 mt-5 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Oops! Page not found</h1>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;