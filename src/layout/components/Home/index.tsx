import React from "react";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";
import Projects from "../Projects/projects";
import Testimonials from "../Testimonials/testimonials";
import MiddleSection from "../MiddleSection/middlesection";
import Technologies from "../Technologies/technologies";
import Footer from "../Footer/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      <MiddleSection />
      <Technologies />
      <Footer />
    </>
  );
}

export default Home;
