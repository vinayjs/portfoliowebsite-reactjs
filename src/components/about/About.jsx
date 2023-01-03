import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="conatainer about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            {/* <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article> */}
            <article className="about_card">
              <FiUsers className="about_icon" />
              <p>
            I am a self-driven front-end developer and have been in the process
            of learning, on how to make UI's more user friendly, attractive and
            efficient for dynamic enivironments. I have concentrated on learning
            javascript more deeply so as to make best use of libraries or
            frameworks like React js, React Native and Vue js. The learning was
            more inclined towards understanding the core concepts and how things
            worked under the hood. Understanding the beauty in creating new
            things and the thrill of debugging made me inlcined towards this
            industry where learning is never-ending.
          </p>
            </article>
            {/* <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article> */}
          </div>
          <br />
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
