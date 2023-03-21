import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { token, user, appInit, mostReadBlog, marginDiv, showCreateForum, query, searchData,
     setToken, fetchUser, fetchMostReadBlog, setMarginDiv, handleShowCreateForum, setQuery, handleSearch } = useContext(AuthContext);

  return {
    user,
    token,
    appInit,
    mostReadBlog,
    marginDiv,
    showCreateForum,
    query,
    searchData,
    isAuthenticated: Boolean(token),
    setToken,
    removeToken: setToken,
    fetchUser,
    fetchMostReadBlog,
    setMarginDiv,
    handleShowCreateForum,
    setQuery,
    handleSearch,
  };
};

export default useAuth;
