import React from 'react';
import Logo from './assets/img/RB_logo.png';

function App() {
  return (
    <div className="App">
      <header id="header-section">
        <div className="container container-header">
          <div className="header">
            <nav className="nav-main">
              <ul className="nav-main__list">
                <li className="nav-main__item">
                  <a className="nav-main__link nav-main__link_selected" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-main__item">
                  <a className="nav-main__link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-main__item">
                  <a className="nav-main__link" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-main__item">
                  <a className="nav-main__link" href="#">
                    Reservation
                  </a>
                </li>
              </ul>
              <img
                style={{ width: '70px', height: '50px' }}
                className="header__logo"
                src={Logo}
                alt="logo"
              />
              <ul className="nav-main__list">
                <li className="nav-main__item">
                  <a className="nav-main__link" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-main__item">
                  <a className="nav-main__link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-main__item">
                  <a className="nav-main__link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-action">
              <button className="header-action__search material-icons-outlined">search</button>
              <button className="header-action__cart material-icons-outlined">shopping_cart</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="banner-section">
          <div className="container">
            <div className="banner">
              <div className="banner-info">
                <h2 className="banner__header">Style is everything</h2>
                <p className="banner__text">
                  Buy glasses in our online store and be a handsome or sexy baby
                </p>
                <button className="banner__btn btn-primary">Bachyts</button>
              </div>
              <button className="banner-video__btn">Play video</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
