/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from "../../common/getSiblings";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="home1">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <Link href="home1">
                  <span
                    className="nav-link"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Главная
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">О компании</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/work1">
                  <span
                    className="nav-link"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Проекты
                  </span>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Соцсети
                </span>
                <div className="dropdown-menu">
                  <Link href="https://www.facebook.com/maketshik?mibextid=LQQJ4d">
                    <a className="dropdown-item">
                      <i className="fab fa-facebook-f"></i> &nbsp; Facebook
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/maketshik.uz/">
                    <a className="dropdown-item">
                      <i className="fab fa-instagram"></i> &nbsp; Instagram
                    </a>
                  </Link>
                  <Link href="https://t.me/maketshik">
                    <a className="dropdown-item">
                      <i className="fab fa-telegram"></i> &nbsp; Telegram
                    </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Контакты</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
