import Home from './Components/Screen/Home';
import Ebook from './Components/Screen/Ebook';
import Blog from './Components/Screen/Blog';
import Forum from './Components/Screen/Forum';
import SignUpScreen from './Components/Screen/SignUpScreen';

import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router> */}
        <div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="dashboard/*" element={<AdminScreen />} /> */}
            <Route exact path="/ebook" element={<Ebook />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/forum" element={<Forum />} />
            <Route exact path="/SignUp" element={<SignUpScreen />} />
          </Routes>

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
