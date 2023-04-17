import React from "react";
import skillsProgress from "../../common/skillsProgress";
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>Архитектура</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Дизайн Интерьер</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Инновация</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="85%"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <h4 className="playfont line-height-50 mb-20">
                Предоставление индивидуальных дизайнерских решений, подходящих
                для любых помещений.
              </h4>
              <p className="mb-10">
                Мы оказываем услуги по созданию реалистичных архитектурных
                макетов и моделей.
              </p>
              <p>
                Сочетание тонкого мастерства, новейших технологий, строгих
                стандартов качества и планирования позволяют создавать
                уникальные проекты для каждого клиента. Все макеты создаются с
                продуманным масштабированием в соответствии с бюджетом и
                сроками, которые определяет клиент.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
