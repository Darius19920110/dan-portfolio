import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}

          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">Sep 2022 - Present</div>
                <div className="name">Masterschool</div>
                <div className="company">Data Analytics Program</div>
                <p>
                  Masterschool is a global network of schools driven by industry
                  tech leaders designed to train talented students to become
                  successful Data Analysts. Masterschool's immersive online
                  training programs include over 650 hours of practice and
                  industry projects in Python, SQL, Tableau, Pandas, Data
                  Visualisation, Microsoft Excel, NumPy, Exploratory Data
                  Analysis (EDA), A\B Testing, and KPIs.
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">May 2022 - Nov 2022</div>
                <div className="name">Google Data Analytics</div>
                <div className="company">Professional Certificate</div>
                <p>
                  This program includes over 180 hours of instruction and
                  hundreds of practice-based assessments, which will help
                  simulate real-world data analytics scenarios that are critical
                  for success in the workplace. The content is highly
                  interactive and exclusively developed by Google employees with
                  decades of experience in data analytics. Through a mix of
                  videos, assessments, and hands-on labs, get introduced to
                  analysis tools and platforms.
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">Feb 2022 - Apr 2022</div>
                <div className="name">AiCore</div>
                <div className="company">Data Engineer Program</div>
                <p>
                  AiCore is a specialist Ai & Data career accelerator. Deliver
                  an immersive programme that will launch a career in Ai & Data
                  at supersonic speed. Over 18 weeks, will build and deploy
                  production-grade systems, learning under the mentorship of
                  industry experts.
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">Feb 2021 - Jan 2022</div>
                <div className="name">Robust IT</div>
                <div className="company">Cyber Security Program</div>
                <p>
                  Robust IT offer a wide range of online training courses that
                  have been carefully developed to provide with the skills to
                  improve efficiency in the workplace, saving valuable time and
                  money. Offer Cyber Security courses. The courses benefit from
                  delivery by e-learning and incorporated live labs and tutor
                  support, providing a flexible learning format. This enables to
                  cater for all the training needs.
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">Sep 2010 - Sep 2011</div>
                <div className="name">University of Hungary</div>
                <div className="company">Computer Science</div>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">Sep 2006 - Sep 201</div>
                <div className="name">
                  IT vocational secondary school and College
                </div>
                <div className="company">Hungary</div>
              </div>
            </div>
          </div>

          <div className="resume-title border-line-h mt-4 pb-0">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="name">Data Analyses and Website Scraping</div>
              <div className="company">Upwork</div>
              <p>
                Scraped all Australian orthodontists from
                https://www.ahpra.gov.au/ website with Selenium - Python.
              </p>
              <p>
                Converted all 552 rows into an Excel sheet and applied
                Matplotlib to create 2 Charts and insights of the data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;

{
  /* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
  <div className="resume-title border-line-h">
    <div className="icon">
      <i className="fa fa-briefcase" />
    </div>
    <div className="name">Experience</div>
  </div>
  <div className="resume-items">
    <div className="resume-item border-line-h active">
      <div className="date">2013 - Present</div>
      <div className="name">Art Director</div>
      <div className="company">Facebook Inc.</div>
      <p>
        Collaborate with creative and development teams on the execution of
        ideas.
      </p>
    </div>
    <div className="resume-item border-line-h">
      <div className="date">2011 - 2012</div>
      <div className="name">Front-end Developer</div>
      <div className="company">Google Inc.</div>
      <p>
        Monitored technical aspects of the front-end delivery for several
        projects.
      </p>
    </div>
    <div className="resume-item">
      <div className="date">2009 - 2010</div>
      <div className="name">Senior Developer</div>
      <div className="company">Abc Inc.</div>
      <p>Optimize website performance using latest technology.</p>
    </div>
  </div>
</div>; */
}
