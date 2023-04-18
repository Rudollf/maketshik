import React from "react";
import Link from "next/link";

const ProjectIntro5 = () => {
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
                В создании исторического проекта "Гур Эмир" 60см х 70см для
                российского музея мы использовали только высококачественные
                материалы , чтобы передать реалистичность и привлекательность
                этого проекта
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Клиент</h6>
              <p>Московский музей</p>
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
              <p>Восточная</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Теги</h6>
              <p>Исторический</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro5;
