import React from "react";
import Link from "next/link";

const ProjectIntro4 = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Официальное представление</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
                Хотите, чтобы ваш проект привлек внимание потенциальных
                покупателей? Закажите у нас трехмерный макет вашего здания.
                Именно так поступили застройщики ЖК «РОХАТ», которым мы
                изготовили реалистичный и детализированный макет дома.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Клиент</h6>
              <p>Rohat Residence</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Срок сборки</h6>
              <p>20 дней</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Категория</h6>
              <p>Hi-tech, Modern</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Теги</h6>
              <p>Современный</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro4;
