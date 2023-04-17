import React from "react";
import Link from "next/link";

const ProjectIntro2 = () => {
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
                Макеты от Maketshik уже привлекли внимание многих потенциальных
                покупателей. Мы рады, что наша работа вызывает интерес и
                помогает людям сделать правильный выбор при покупке жилья. Одним
                из таких наших проектов является модель ЖК Osiyo Stroy. Наша
                команда изготовила 2 варианта макета здания. Первый макет
                представляет собой полную копию жилого комплекса. Второй макет
                является более детальной версией. Он позволяет рассмотреть
                каждый дом, каждую квартиру и даже ландшафтный дизайн
                территории. Мы приложили максимум усилий, чтобы макеты были
                максимально точными и реалистичными.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Клиент</h6>
              <p>Osiyo Stroy Development</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Срок сборки</h6>
              <p>40 дней</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Категория</h6>
              <p>New classic</p>
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

export default ProjectIntro2;
