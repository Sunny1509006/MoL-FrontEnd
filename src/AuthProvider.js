import React, {useState, useEffect} from 'react';

export const AuthContext = React.createContext({
  user: null,
  token: null,
  appInit: false,
  setUser: () => {},
  setToken: () => {},
});


const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [appInit, setAppInit] = useState(false);
  
  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      setToken(accessToken);
    }
    setTimeout(() => {
      setAppInit(true);
    }, 500);
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, appInit, setUser, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
