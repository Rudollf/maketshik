import React from "react";
import Link from "next/link";

const ProjectIntro1 = () => {
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
                Каждому застройщику, воплощая свой проект в реальность, важно
                знать, насколько он приблизился к дому мечты своих будущих
                покупателей. Создание макета помогает визуализировать проект и
                дает возможность оценить его внешний вид и функциональность на
                этапе строительства.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Клиент</h6>
              <p>Prestige stroy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Срок сборки</h6>
              <p>34 дней</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Категория</h6>
              <p>Modern, Hi-tech</p>
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

export default ProjectIntro1;
