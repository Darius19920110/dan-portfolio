import Home from "../src/components/Home";

import About from "../src/components/About";
import Resume from "../src/components/Resume";
import Project from "../src/components/Project";
import Assignment from "../src/components/Assignment";
import Certification from "../src/components/Certification";
import Badge from "../src/components/Badge";
import Contact from "../src/components/Contact";

import AboutMe from "../src/components/sections/AboutMe";
import Projects from "../src/components/sections/Projects";
import Assignments from "../src/components/sections/Assignments";
import Certifications from "../src/components/sections/Certifications";
import Badges from "../src/components/sections/Badges";
import ContactInfo from "../src/components/sections/ContactInfo";
import ResumeSection from "../src/components/sections/Resume";
import Skills from "../src/components/sections/Skills";
import bio from "../src/data/bio";

import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

const home = () => {
  return (
    <Layout bg={"gradient"}>
      <Header noSideBarBtn />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile.jpg)" }}
          />
          {/* profile titles */}
          <div className="profile_img">
            <div className="title">Daniel Meszaros</div>
            <div className="subtitle subtitle-typed">Data Analyst</div>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a
              href="https://storage.googleapis.com/projects01/Daniel_Meszaros_Resume_16-04-2023-09-37-30.pdf"
              className="lnk"
              target="_blank"
            >
              <span className="text">Download CV</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>

      <About>
        <AboutMe bio={bio} />
      </About>
      <Resume>
        <ResumeSection />
        <Skills />
      </Resume>
      <Project>
        <Projects />
      </Project>
      <Assignment>
        <Assignments />
      </Assignment>
      <Certification>
        <Certifications />
      </Certification>
      <Badge>
        <Badges />
      </Badge>
      <Contact>
        <ContactInfo />
      </Contact>
    </Layout>
  );
};
export default home;
