import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { token, user, appInit, setToken, fetchUser } = useContext(AuthContext);

  return {
    user,
    token,
    appInit,
    isAuthenticated: Boolean(token),
    setToken,
    removeToken: setToken,
    fetchUser,
  };
};

export default useAuth;
