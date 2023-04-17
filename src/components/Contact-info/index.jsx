import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Свяжитесь с нами</h6>
                <p>+998 (97) 718 14 18</p>
                <p>+998 (94) 630 19 19</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Напишите Email</h6>
                <p>jaqa90@mail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Официальный Адрес</h6>
                <p>кв 7, 119 улица Ифтихор, Ташкент 100057, Узбекистан</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
