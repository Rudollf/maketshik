/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blogs1.json";
import Link from "next/link";

const Blogs1 = () => {
  return (
    <section className="blog-grid section-padding mb-50">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                ПОСЛЕДНИЕ НОВОСТИ
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Наши Блоги
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {Blog1Data.map((blog, index) => (
            <div className="col-lg-4" key={blog.id}>
              <div
                className="item wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s"}
              >
                <div className="post-img">
                  <div className="img">
                    <img src={blog.image} alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <Link href={blog.link}>{blog.by}</Link>
                    <Link href={blog.link}>{blog.date}</Link>
                  </div>

                  <h5 className="playfont">
                    <Link href={blog.link}>{blog.title}</Link>
                  </h5>

                  <Link href={blog.link}>
                    <a className="more">
                      <span>читать далее</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
