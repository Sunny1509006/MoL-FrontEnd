import React, { useState, useEffect } from 'react';
import axios from './Components/axios/axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({
  user: null,
  token: null,
  showCreateForum: false,
  mostReadBlog: null,
  marginDiv: false,
  query: null,
  visible: false,
  searchData: null,
  appInit: false,
  setToken: () => { },
  fetchUser: () => { },
  fetchMostReadBlog: () => { },
  setMarginDiv: () => { },
  handleShowCreateForum: () => { },
  handleSearch: () => { },
  setQuery: () => { },
  setVisible: () => { },
});


const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showCreateForum, setCreateForum] = useState(false);
  const [token, setToken] = useState(null);
  const [appInit, setAppInit] = useState(false);
  const [mostReadBlog, setMostReadBlog] = useState({});
  const [marginDiv, setMarginDiv] = useState(false);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setMarginDiv(localStorage.getItem("isOpen"))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("query", query);
    
    axios.get(`/api/search/?search=${query}`)
    .then(response=> {
      // console.log(response.data);
      setSearchData(response.data);
      setTimeout(() => {
        setAppInit(true);
      }, 500);
      navigate("/search")
    })
    .catch(err=> {
        console.log(err);
    })
}

  const handleShowCreateForum = () => {
    setCreateForum(!showCreateForum);
  };

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
      user, token, appInit, mostReadBlog, marginDiv, showCreateForum, query, searchData,
      visible,
      setUser, setToken: handleSetToken, handleShowCreateForum, handleSearch,
      fetchUser, fetchMostReadBlog, setMarginDiv, setQuery, setVisible,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
