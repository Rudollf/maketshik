/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Наши контакты</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Официальный Адрес</h6>
                    <p>кв 7, 119 улица Ифтихор, Ташкент 100057, Узбекистан</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Напишите Email</h6>
                    <p>jaqa90@mail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Свяжитесь с нами</h6>
                    <p>
                      +99897 718 14 18 <br></br> +99894 630 19 19
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Последние новости</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="https://www.instagram.com/p/CqdETl5p2IR/">
                      <a>
                        <img src="/assets/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>

                  <div className="sm-post">
                    <Link href="https://www.instagram.com/p/CqdETl5p2IR/">
                      <a>
                        <p>
                          Благодаря нашему проекту, студенты оценили масштаб и
                          красоту здания.
                        </p>
                      </a>
                    </Link>
                    <span className="date">6 Mar 2023</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="https://www.instagram.com/p/CqKvAzAAq_U/">
                      <a>
                        <img src="/assets/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="https://www.instagram.com/p/CqKvAzAAq_U/">
                      <a>
                        <p>
                          Хотите, чтобы макет стал полным олицетворением проекта
                          вашей мечты.
                        </p>
                      </a>
                    </Link>
                    <span className="date">6 Mar 2023</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Ваша Электронная почта" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
                <Link href="https://www.facebook.com/maketshik?mibextid=LQQJ4d">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="https://t.me/maketshik">
                  <a>
                    <i className="fab fa-telegram"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/maketshik.uz/">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>
                  © 2012, <Link href="#">MaketShik</Link> создает макеты для
                  решения самых амбициозных задач.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
