import React from "react";
import "./testimonials.scss";
import Testimonial from "./Testimonial/testimonial";
import TestPic from "../../assets/images/test-pic.png";
import CompanyPic from "../../assets/images/company-pic.png";

function Testimonials() {
  const testimonialData = [
    {
      testimonial_id: 0,
      testimonial_content:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris non sapien imperdiet ornare.",
      testimonial_pic: TestPic,
      testimonial_author: "John Doe",
      testimonial_designation: "CEO, ABC Company",
      testimonial_company_pic: CompanyPic,
      testimonial_tech: "Webflow",
    },

    {
      testimonial_id: 1,
      testimonial_content:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris non sapien imperdiet ornare.",
      testimonial_pic: TestPic,
      testimonial_author: "John Doe",
      testimonial_designation: "CEO, ABC Company",
      testimonial_company_pic: CompanyPic,
      testimonial_tech: "Webflow",
    },

    {
      testimonial_id: 1,
      testimonial_content:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris non sapien imperdiet ornare.",
      testimonial_pic: TestPic,
      testimonial_author: "John Doe",
      testimonial_designation: "CEO, ABC Company",
      testimonial_company_pic: CompanyPic,
      testimonial_tech: "Webflow",
    },
  ];
  return (
    <section className="testimonials">
      <div className="testimonials__header wrapper">
        <h3>CLIENT TESTIMONIALS</h3>
        <h6>Hear what my clients have to say about me</h6>
      </div>
      <div className="testimonials__container wrapper scroller">
        <div className="scroller__inner">
          {testimonialData.map((testimonial, index) => {
            return <Testimonial testimonial={testimonial} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
