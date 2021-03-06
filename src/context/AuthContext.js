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
  const [counter, setCounter] = useState(initialState.counter || 0);

  const userData = {
    user: currentUser && currentUser.displayName,
    counter
  };

  function signup(email, password, name) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        if (userCredentials.user) {
          userCredentials.user.updateProfile({displayName: name})
        }
      })
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function incrementCounter() {
    setCounter(prev => prev + 1)
  }

  function decrementCounter() {
    setCounter(prev => (prev > 0) ? prev - 1 : prev)
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [counter]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
