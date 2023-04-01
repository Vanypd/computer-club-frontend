import React from 'react';

const Header = () => {
    return (
        <header className="header flex">
            <div className="conteiner header_conteiner flex">
                <div className="header_mem_text">
                    <h1>Logo</h1>
                </div>
                <div className="authentication flex">
                    <a href="login.html" className="home_page_link header_link flex">
                        <span>Вход</span>
                    </a>
                    <a href="registration.html" className="home_page_link header_link flex">
                        <span>Регистрация</span>
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Header;