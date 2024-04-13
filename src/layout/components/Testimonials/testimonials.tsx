import React, { useEffect, useState } from "react";
import "./testimonials.scss";
import Testimonial from "./Testimonial/testimonial";
import TestPic from "../../assets/images/test-pic.png";
import CompanyPic from "../../assets/images/company-pic.png";
import { get } from "../../../utils/api";

function Testimonials() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  useEffect(() => {
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner: any = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item: any) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const getTestimonials = async () => {
    try {
      const response = await get("testimonials", {});

      if (response) {
        console.log("response", response);

        setData(response.data.testimonials);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="testimonials">
      <div className="testimonials__header wrapper">
        <h3>CLIENT TESTIMONIALS</h3>
        <h6>Hear what my clients have to say about me</h6>
      </div>
      <div
        className="testimonials__container wrapper scroller"
        data-direction="left"
        data-speed="slow"
      >
        <div className="scroller__inner">
          {data.map((testimonial: any, index: any) => {
            return <Testimonial testimonial={testimonial} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
