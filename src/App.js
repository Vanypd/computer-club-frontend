import React from 'react';
import { root } from '.';
import Header from './components/PagesParts/Header/Header';
import Footer from './components/PagesParts/Footer/Footer'
import Users from './users';


function App() {
  function UsersPage() {
    root.render(
      <Users />
    )
  }

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <div className="container home_page_container">
          <ul className="home_page_buttons_list flex">
            <li className="home_page_buttons_item flex">

            </li>
            <li className="home_page_buttons_item flex">
              <a onClick={UsersPage} className="home_page_link flex">
                <span>Просмотр пользователей</span>
              </a>
            </li>
            <li className="home_page_buttons_item flex">
              <a href="aboutUs.html" className="home_page_link flex">
                <span>О нас</span>
              </a>
            </li>

          </ul>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
