import React, { useState, useEffect } from 'react';
import axios from './Components/axios/axios';

export const AuthContext = React.createContext({
  user: null,
  token: null,
  mostReadBlog: null,
  marginDiv: false,
  appInit: false,
  setToken: () => { },
  fetchUser: () => { },
  fetchMostReadBlog: () => { },
  setMarginDiv: () => { },
});


const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [appInit, setAppInit] = useState(false);
  const [mostReadBlog, setMostReadBlog] = useState({});
  const [marginDiv, setMarginDiv] = useState(false);

  useEffect(() => {
    setMarginDiv(localStorage.getItem("isOpen"))
  }, [])

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

  const fetchMostReadBlog = () => {
    axios.get(
      `/api/blogs/topviewer/`
    )
      .then(res => {
        // console.log(res)
        setMostReadBlog(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  };

  return (
    <AuthContext.Provider value={{
      user, token, appInit, mostReadBlog, marginDiv,
      setUser, setToken: handleSetToken,
      fetchUser, fetchMostReadBlog, setMarginDiv
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
