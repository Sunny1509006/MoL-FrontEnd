import React, { useState, useEffect } from 'react';
import axios from './Components/axios/axios';

export const AuthContext = React.createContext({
  user: null,
  token: null,
  appInit: false,
  setToken: () => { },
  fetchUser: () => { },
});


const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [appInit, setAppInit] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      handleSetToken(accessToken);
    }
    setTimeout(() => {
      setAppInit(true);
    }, 500);
  }, []);

  const handleSetToken = (token) => {
    if (token) {
      setToken(token);
      localStorage.setItem('access', token);
      fetchUser(token);
    } else {
      setToken(null);
      setUser(null);
      localStorage.removeItem('access');
    }
  }

  const fetchUser = (jwt = token) => {
    axios.post('/api/profile/',
      { jwt }
    )
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <AuthContext.Provider value={{ user, token, appInit, setUser, setToken: handleSetToken, fetchUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
