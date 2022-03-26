import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../firebase';


const AuthContext = createContext(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const initialState = JSON.parse(localStorage.getItem('userData')) || [];
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(initialState.counter);

  const userData = {
    user: currentUser && currentUser.email,
    counter
  };

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function incrementCounter() {
    return setCounter(prev => prev + 1)
  }

  function decrementCounter() {
    return setCounter(prev => (prev > 0) ? prev - 1 : prev)
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  },[counter]);

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  const value = {
    signup,
    login,
    logout,
    currentUser,

    counter,
    decrementCounter,
    incrementCounter
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
