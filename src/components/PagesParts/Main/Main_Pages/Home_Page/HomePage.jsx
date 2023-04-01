import React from 'react'
import Users from '../../../../../users';
import { root } from '../../../../../';

const HomePage = () => {
    const UsersPage = () => {
        root.render(
          <Users />
        )
      }

    return (
        <main className="main">
        <div className="container home_page_container">
          <ul className="home_page_buttons_list flex">
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
    )
}

export default HomePage;