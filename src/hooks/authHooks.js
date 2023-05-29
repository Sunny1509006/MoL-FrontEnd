import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { token, user, appInit, mostReadBlog, marginDiv, showCreateForum, query, searchData, visible, isPopUpOpen,
     setToken, fetchUser, fetchMostReadBlog, setMarginDiv, handleShowCreateForum, setQuery, handleSearch,
    setVisible, setIsPopUpOpen } = useContext(AuthContext);

  return {
    user,
    token,
    appInit,
    mostReadBlog,
    marginDiv,
    showCreateForum,
    query,
    visible,
    isPopUpOpen,
    searchData,
    isAuthenticated: Boolean(token),
    setToken,
    removeToken: setToken,
    fetchUser,
    fetchMostReadBlog,
    setMarginDiv,
    handleShowCreateForum,
    setQuery,
    setVisible,
    handleSearch,
    setIsPopUpOpen,
    
  };
};

export default useAuth;
