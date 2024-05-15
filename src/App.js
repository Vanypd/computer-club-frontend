import React, { useEffect, useState } from 'react';
import Header from '@components/Header/Header';
import HomePage from '@components/pages/Home_Page/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthorisationPage from '@components/pages/Authorisation_Page/AuthorisationPage';
import RegistrationPage from '@components/pages/Registration_Page/RegistrarionPage';
import UserProfile from '@components/pages/User_Profile_Page/UserProfile';
import UsersContainer from '@src/components/pages/Users_Page/UsersContainer';
import ErrorPage from '@components/pages/Error_Page/ErrorPage';
import CookieManager from './cookie/CookieManager';
import PageLoader from './components/UI/loader/page_loader/PageLoader';

function App() {
  const [isLogged, setLogged] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (CookieManager.getCookie('userid')) {
      setLogged(true);
    }

    setLoaded(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <PageLoader isPageLoaded={isLoaded} />
      <div className="App">
        {(isLoaded) ?
          (
            <BrowserRouter>
              <Header isLogged={isLogged} setLogged={setLogged} />
              <Routes>
                <Route path='/' element={<HomePage scrollPosition={scrollPosition} isLogged={isLogged} />} />
                {!isLogged && <Route path='/auth' element={<AuthorisationPage isLogged={isLogged} setLogged={setLogged} />} />}
                {!isLogged && <Route path='/reg' element={<RegistrationPage />} />}
                {isLogged && <Route path='/profile' element={<UserProfile isLogged={isLogged} setLogged={setLogged} />} />}
                {isLogged && <Route path='/users-list' element={<UsersContainer />} />}
                <Route path="/*" element={<Navigate to="/" replace />} />
                <Route path="/error" element={<ErrorPage />} />
              </Routes>
            </BrowserRouter>
          )
          : null
        }
      </div></>
  );
}

export default App;
