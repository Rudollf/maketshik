/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "При помощи наших макетов можно показать",
          second: "потенциальным инвесторам все особенности проекта.",
        }}
        // title = "text",
        content="Наглядность и красочность макета позволит человеку, который не искушен в строительстве и не умеет читать чертежи, разобраться в особенностях проекта. Клиент может увидеть свои окна на фасаде здания, оценить удобство подъездных путей и стоянок, даже определить на какой из детских площадок у дома он сможет гулять с детьми.Макет коттеджного поселка позволит ему оценить прилегающий ладшафт, увидеть ближайшую речку или лесок. Такие макеты значительно облегчают труд менеджеров и специалистов по продажам."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
