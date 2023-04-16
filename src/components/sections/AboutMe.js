import { Fragment } from "react";
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio }}
            ></div>
          </div>
          <div className="clear mb-4" />
        </div>
        {/* skill item */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>

              <ul>
                <li>
                  <div className="name">Tableau</div>
                </li>
                <li>
                  <div className="name">Excel</div>
                </li>
                <li>
                  <div className="name">Google Sheets</div>
                </li>
                <li>
                  <div className="name">SQL Lite</div>
                </li>
                <li>
                  <div className="name">My SQL</div>
                </li>
                <li>
                  <div className="name">PostgreSQL</div>
                </li>
                <li>
                  <div className="name">Selenium</div>
                </li>
                <li>
                  <div className="name">Beautiful Soup</div>
                </li>
                <li>
                  <div className="name">REGEX</div>
                </li>
                <li>
                  <div className="name">Matplotlib</div>
                </li>
                <li>
                  <div className="name">HTML5/CSS3</div>
                </li>
                <li>
                  <div className="name">JavaScript</div>
                </li>
                <li>
                  <div className="name">React js</div>
                </li>
                <li>
                  <div className="name">Node js</div>
                </li>
                <li>
                  <div className="name">RDBMS</div>
                </li>
                <li>
                  <div className="name">Material UI</div>
                </li>
                <li>
                  <div className="name">Bootstrap</div>
                </li>
                <li>
                  <div className="name">Linux Commands</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 mt-5">
            <div className="skills-list list om-t">
              <ul>
                <li>
                  <div className="name">Python</div>
                </li>
                <li>
                  <div className="name">Pandas</div>
                </li>
                <li>
                  <div className="name">NumPy</div>
                </li>
                <li>
                  <div className="name">PowerPoint</div>
                </li>
                <li>
                  <div className="name">React Native</div>
                </li>
                <li>
                  <div className="name">REST API</div>
                </li>
                <li>
                  <div className="name">Mongo DB</div>
                </li>

                <li>
                  <div className="name">ETL/ELT</div>
                </li>

                <li>
                  <div className="name">Azure</div>
                </li>
                <li>
                  <div className="name">Google Cloud</div>
                </li>
                <li>
                  <div className="name">Postman</div>
                </li>
                <li>
                  <div className="name">Qt Designer</div>
                </li>
                <li>
                  <div className="name">Shell Scripting</div>
                </li>
                <li>
                  <div className="name">Networking / Subnetting</div>
                </li>
                <li>
                  <div className="name">PySide2</div>
                </li>

                <li>
                  <div className="name">Adobe Illustrator</div>
                </li>
                <li>
                  <div className="name">Express - Node js</div>
                </li>

                <li>
                  <div className="name">Security Fundamentals</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
