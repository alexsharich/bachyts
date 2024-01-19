import React from 'react';
import Logo from './assets/img/RB_logo.png';
import IMG1 from './assets/img/1rb.jpg';
import IMG2 from './assets/img/2rb.jpg';
import IMG3 from './assets/img/3rb.jpg';
import IMG4 from './assets/img/4rb.jpg';
import IMG5 from './assets/img/5rb.jpg';
import IMG6 from './assets/img/6rb.jpg';
import IMG7 from './assets/img/7rb.jpg';
import IMG8 from './assets/img/8rb.jpg';
import IMG9 from './assets/img/9rb.jpg';

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
        <div className="container">
          <ol className="features section-main">
            <li className="features__item">
              <span className="features__item_dark">01</span>Only Original
              <img className="features__img" src={IMG4} alt="Our feature" />
            </li>
            <li className="features__item">
              <span className="features__item_dark">02</span>Best Price
              <img className="features__img" src={IMG4} alt="Our feature" />
            </li>
            <li className="features__item">
              <span className="features__item_dark">03</span>Best Salers
              <img className="features__img" src={IMG4} alt="Our feature" />
            </li>
          </ol>
        </div>
        <section id="history-section" className="section-main">
          <div className="container">
            <div className="history-wrap">
              <img className="history-wrap__img" src={IMG5} alt="Glasses" />
              <img className="history-wrap__img" src={IMG6} alt="Glasses" />
              <img className="history-wrap__img" src={IMG9} alt="Glasses" />
              <div className="history">
                <h2 className="history__title section-title">Best store </h2>
                <h3 className="history__subtitle section-subtitle">Style is everything</h3>
                <p className="history__text section-text">
                  Buy glasses in our online store and be a handsome or sexy baby. Buy glasses in our
                  online store and be a handsome or sexy baby. Buy glasses in our online store and
                  be a handsome or sexy baby
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="popular-section" className="section-main">
          <div className="container">
            <h2 className="section-title">Popular Product</h2>
            <h3 className="section-subtitle">Popular Brand</h3>
            <div className="popular-wrap">
              <div className="popular">
                <img className="popular__img" src={IMG1} alt="Brand" />
                <div className="rating">
                  <h4 className="rating__title">RayBan</h4>
                  <ul className="rating__list">
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star_border</li>
                  </ul>
                </div>
                <h3 className="popular__title">model 1</h3>
                <b className="popular__price">
                  Price - <strong className="popular__price_sale">70$ / </strong>100$
                </b>
                <button className="popular__btn btn-primary">
                  <span className="material-icons-outlined">shopping_cart</span>Add to cart
                </button>
              </div>
              <div className="popular">
                <img className="popular__img" src={IMG1} alt="Brand" />
                <div className="rating">
                  <h4 className="rating__title">RayBan</h4>
                  <ul className="rating__list">
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star_border</li>
                  </ul>
                </div>
                <h3 className="popular__title">model 1</h3>
                <b className="popular__price">
                  Price - <strong className="popular__price_sale">70$ / </strong>100$
                </b>
                <button className="popular__btn btn-primary">
                  <span className="material-icons-outlined">shopping_cart</span>Add to cart
                </button>
              </div>
              <div className="popular">
                <img className="popular__img" src={IMG1} alt="Brand" />
                <div className="rating">
                  <h4 className="rating__title">RayBan</h4>
                  <ul className="rating__list">
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star</li>
                    <li className="rating__item material-icons-outlined">star_border</li>
                  </ul>
                </div>
                <h3 className="popular__title">model 1</h3>
                <b className="popular__price">
                  Price - <strong className="popular__price_sale">70$ / </strong>100$
                </b>
                <button className="popular__btn btn-primary">
                  <span className="material-icons-outlined">shopping_cart</span>Add to cart
                </button>
              </div>
            </div>
            <a className="popular__link btn-primary" href="#">
              View all Brands
            </a>
          </div>
        </section>
        <section id="discover-section" className="section-main">
          <div className="container">
            <div className="discover-wrap">
              <img className="discover-img" src={IMG7} alt="discover" />
              <div className="discover">
                <h3 className="discover__title section-subtitle">Style is everything</h3>
                <p className="section-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius obcaecati neque
                  tempora, inventore corporis laudantium in necessitatibus autem laboriosam odit sit
                  dolore culpa soluta unde possimus fugiat recusandae cumque animi optio et
                  suscipit.
                </p>
                <a className="discover__link btn-primary" href="#">
                  Is everything
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="menu-section" className="section-main">
          <div className="container">
            <h2 className="section-title">Glasses</h2>
            <h3 className="section-subtitle">Most popular models</h3>
            <ul className="menu-wrap">
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
              <li className="menu">
                <img className="menu__img" src={IMG1} alt="model" />
                <h3 className="menu__title">Polaroid</h3>
                <b className="menu__price">50$</b>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
