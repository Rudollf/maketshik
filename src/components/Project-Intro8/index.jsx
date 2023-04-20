import React from "react";
import Link from "next/link";

const ProjectIntro8 = () => {
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
                Чтобы помочь заинтересовать потенциальных покупателей и привлечь
                новых жильцов в комплекс. Именно с такой целью мы создавали
                макет ЖК «Манзур». Наша команда уделила особое внимание деталям
                и функциональности каждого элемента комплекса, с учетом
                современные тенденций и требований к дизайну жилых комплексов.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Клиент</h6>
              <p>Premier house build</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Срок сборки</h6>
              <p>1 месяц</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Категория</h6>
              <p>Классик</p>
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

export default ProjectIntro8;
