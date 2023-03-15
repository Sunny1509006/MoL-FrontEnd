import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { token, user, appInit, mostReadBlog, marginDiv,
     setToken, fetchUser, fetchMostReadBlog, setMarginDiv } = useContext(AuthContext);

  return {
    user,
    token,
    appInit,
    mostReadBlog,
    marginDiv,
    isAuthenticated: Boolean(token),
    setToken,
    removeToken: setToken,
    fetchUser,
    fetchMostReadBlog,
    setMarginDiv,
  };
};

export default useAuth;
