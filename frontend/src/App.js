import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Splash from './screens/Splash';
import Home from './screens/Home';
import User from "./screens/User";

function App() {
  const user = useSelector(state => state.global.user);

  return (
    <Router>
      <div>
        {console.log(user.id)}
        {user.id ?
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="user/:userId" element={<User />} />
            </Routes>
          : 
          <Routes>
            <Route exact path="/" element={<Splash />} />
          </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
