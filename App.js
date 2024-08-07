import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { Button } from './components/Button';
//import LoginButton from './components/Button/login-button';
//import LogoutButton from './components/Button/logout-button';
//import UserProfile from './components/Button/signup-button';
import { useAuth0 } from '@auth0/auth0-react';
import PhotoGallery from './components/pages/PhotoGallery';

function App() {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Oops algo salió mal... {error.message}</div>;
  }
  return (

    <>
      <Router>
        <div className="App">
          <Button />
          <Navbar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/services' Component={Services} />
            <Route path='/gallery/:category' Component={PhotoGallery} />
            <Route path='/products' Component={Products} />
            <Route path='/SignUp' Component={SignUp} />
          </Routes>
          {/* {isAuthenticated ? (
            <div>
              <UserProfile />
              <LogoutButton />
            </div>
          ) : (
            <>
            </>
          )} */}
        </div>
      </Router>
    </>

  );
}
export default App;
