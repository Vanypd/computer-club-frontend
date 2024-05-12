import React, { useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import HomePage from 'components/pages/Home_Page/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AutorisationPage from 'components/pages/Authorisation_Page/AuthorisationPage';
import RegistrationPage from 'components/pages/Registration_Page/RegistrarionPage';
import UserProfile from 'components/pages/User_Profile_Page/UserProfile';
import Users from 'src/users';
import { CookieManager } from 'src/MAIN';
import ErrorPage from 'components/pages/Error_Page/ErrorPage';

function App() {
  const [isLogged, setLogged] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    if (CookieManager.getCookie('userid')) {
      setLogged(true)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLogged={isLogged} setLogged={setLogged} />
        <Routes>
          <Route path='/' element={<HomePage scrollPosition={scrollPosition} isLogged={isLogged} />} />
          {!isLogged && <Route path='/auth' element={<AutorisationPage isLogged={isLogged} setLogged={setLogged} />} />}
          {!isLogged && <Route path='/reg' element={<RegistrationPage />} />}
          {isLogged && <Route path='/profile' element={<UserProfile isLogged={isLogged} setLogged={setLogged} />} />}
          {isLogged && <Route path='/users-list' element={<Users />} />}
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/error" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
