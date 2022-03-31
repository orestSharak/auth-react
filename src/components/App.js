import React from "react";
import Signup from "./Signup";
import {AuthProvider} from "../context/AuthContext";
import {HashRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import NavbarComponent from "./NavbarComponent";
import Home from "./Home";
import PageNotFound from "./PageNotFound";


function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
