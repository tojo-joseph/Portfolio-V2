import React from "react";
import Logo from "../../assets/images/portfolio-logo.svg";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhotoIcon from "../../assets/images/profile-pic.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container wrapper">
        <div>
          <img
            src={PhotoIcon}
            alt=""
            style={{
              width: "140px",
              height: "140px",
              clipPath: "circle(45%)",
              marginBottom: "1rem",
            }}
          />
          <div className="d-flex justify-content-around align-items-center">
            <a href="#">
              <FacebookIcon sx={{ color: "#FFFFFF" }} />
            </a>
            <a href="#">
              <InstagramIcon sx={{ color: "#FFFFFF" }} />
            </a>
            <a href="#">
              <LinkedInIcon sx={{ color: "#FFFFFF" }} />
            </a>
            <a href="#">
              <GitHubIcon sx={{ color: "#FFFFFF" }} />
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h3>GET IN TOUCH</h3>
          <p>
            Got a question or just want to say hey? I'll do my best to get back
            to you!
          </p>
          <a
            href="#"
            className="btn"
            style={{
              borderRadius: "10px",
              cursor: "pointer",
              display: "inline-block",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h3>CONNECT</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
