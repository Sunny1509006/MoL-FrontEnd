import Home from './Components/Screen/Home';
import AuthProvider from './AuthProvider';
import './index.css';

function App() {
  return (
    <AuthProvider>
      {/* <Router> */}
      <div>
        <Home />

      </div>
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;
