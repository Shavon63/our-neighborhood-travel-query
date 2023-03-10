
import './App.css';
import { useState, useEffect } from 'react';
import Search from './pages/Search/index.js';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Map from './pages/Map';
import { getUserData } from './utils/api';
import SignUpForm from './pages/SignUp/index';
import Account from './pages/Account';
import Error from './pages/Error';




function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})


 
  useEffect(() => {
    if (localStorage.token) {
        setIsLoggedIn(true)
        getUserData()
        .then((data) => {
          setUser(data)
        })
    }
}, [])


  return (
    <div className="App">
      <Nav loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<SignUpForm loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}/>
        <Route path="/login" element={<Login loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}/>
        <Route path="/search" element ={<Search loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/map" element ={<Map loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/account" element ={<Account user={user} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}/>

        <Route path="/*" element={<Error/>}/>

     </Routes>
    </div>
  );
}

export default App;
