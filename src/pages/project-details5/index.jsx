/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro5 from "../../components/Project-Intro5";
import NextProject from "../../components/Next-Project";
import NextProject1 from "../../components/Next-Project1/index1";

const ProjectDetails5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="«Гур Эмир»"
        fullPath={[
          { id: 1, name: "главная", url: "/" },
          { id: 2, name: "портфолио", url: "/work1" },
          { id: 3, name: "детали проекта", url: "/project-details5" },
        ]}
        image="/assets/img/portfolio/project1/bg.jpg"
      />
      <ProjectIntro5 />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a className="class1 col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project6/1.jpg" />
            </a>
            <a className="class1 col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project6/2.jpg" />
            </a>
            <a className="class1 col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project6/3.jpg" />
            </a>
            <a className="class1 col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project6/4.jpg" />
            </a>
          </div>
        </div>
      </section>

      {/* onClick={function55()}

       let classimg = "/assets/img/portfolio/project1/3.jpg",

      function55(name123) {
          name123 === 1 ? classimg == "/assets/img/portfolio/project1/1.jpg" : classimg == "/assets/img/portfolio/project1/2.jpg"
      } */}

      <style jsx>{`
        @media only screen and (min-width: 1120px) {
          .padding-left {
            margin-left: 20px;
          }
        }

        @media only screen and (min-width: 1160px) {
          .padding-left {
            margin-left: 50px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .padding-left {
            margin-left: 80px;
          }
        }

        @media only screen and (min-width: 1250px) {
          .padding-left {
            margin-left: 100px;
          }
        }

        @media only screen and (min-width: 1300px) {
          .padding-left {
            margin-left: 130px;
          }
        }

        a.class1 {
          cursor: none;
        }
      `}</style>

      {/* @media only screen and (min-width: 991px) {
          .padding-left: 30px;
        } */}

      <a className="padding-left class1">
        <img alt="" src="/assets/img/portfolio/project6/5.jpg" />
      </a>

      <NextProject />
      <section className="projdtal">
        <div className="justified-gallery">
          <a href="/project-details" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project2/1.jpg" />
          </a>
          <a href="/project-details1" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/1.jpg" />
          </a>
          <a href="/project-details2" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project3/1.jpg" />
          </a>
          <a href="/project-details3" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project4/1.jpg" />
          </a>
        </div>
      </section>
      <NextProject1 />
    </MainLayout>
  );
};

export default ProjectDetails5;
