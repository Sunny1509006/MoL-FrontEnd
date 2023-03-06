import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { token, user, appInit, setToken, setUser } = useContext(AuthContext);

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem('access', token);
  }

  const handleRemoveToken = () => {
    setToken(null);
    localStorage.removeItem('access');
  }

  return {
    user,
    token,
    appInit,
    isAuthenticated: Boolean(token),
    setToken: handleSetToken,
    removeToken: handleRemoveToken,
    setUser,
  };
};

export default useAuth;
