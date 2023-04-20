/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Наши работы</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      Все
                    </span>
                    <span data-filter=".theaters">Классик</span>
                    <span data-filter=".interior">Современный</span>
                    <span data-filter=".residential">Другие</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/2.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details8">ЖК Манзур</Link>
                  </h5>
                  <span>Классик</span>
                  <span>Современный</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/1.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details4">ЖК Rohat</Link>
                  </h5>
                  <span>Хай-тек</span>
                  <span>Современный</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/5.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details5">Гур Эмир</Link>
                  </h5>
                  <span>Восточный</span>
                  <span>Исторический</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/3.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details7">Yangi O’zbekiston</Link>
                  </h5>
                  <span>Восточный</span>
                  <span>Классик</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details6">
                      Металлоконструкция Akfa
                    </Link>
                  </h5>
                  <span>Промышленный</span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
