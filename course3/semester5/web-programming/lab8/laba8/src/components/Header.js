import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Новогодние книги</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#">Главное</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;