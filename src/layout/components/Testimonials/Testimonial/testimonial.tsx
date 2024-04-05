import { Card, Divider } from "@mui/material";
import React from "react";
import StarIcon from "../../../assets/images/star-icon.svg";

function Testimonial(props: any) {
  return (
    <div style={{ width: "44.51%" }}>
      <div className="d-flex" style={{ marginBottom: "2rem" }}>
        <img src={StarIcon} alt="" />
        <img src={StarIcon} alt="" />
        <img src={StarIcon} alt="" />
        <img src={StarIcon} alt="" />
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h6>
          <strong>{props.testimonial.testimonial_content}</strong>
        </h6>
      </div>

      <div className="d-flex align-items-center">
        <img
          src={props.testimonial.testimonial_pic}
          alt=""
          width="90px"
          height="90px"
          style={{ marginRight: "2rem" }}
        />
        <div style={{ marginRight: "2rem" }}>
          <h5 style={{ marginBottom: "8px" }}>
            {props.testimonial.testimonial_author}
          </h5>
          <h6 style={{ color: "#808080" }}>
            {props.testimonial.testimonial_designation}
          </h6>
        </div>
        <Divider
          orientation="vertical"
          sx={{
            width: "3px",
            height: "100px",
            bgcolor: "#808080",
            marginRight: "2rem",
          }}
          component="div"
        />
        <div style={{ marginRight: "2rem" }}>
          <img src={props.testimonial.testimonial_company_pic} alt="" />
        </div>

        <div>
          <h5>{props.testimonial.testimonial_tech}</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
