import React from "react";
import Link from "next/link";

const ProjectIntro6 = () => {
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
                Трехмерная модель промышленного предприятия, как правило,
                необходима для демонстрации основных принципов и технологий
                работы производства, Основное преимущество – максимальное
                сходство с оригиналом и возможность осмотра объекта с любого
                ракурса, а также общего вида здания и других построек в
                совокупности с прилегающей территорией.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Клиент</h6>
              <p>Akfa Management Group</p>
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
              <p>Промышленный макет</p>
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

export default ProjectIntro6;
