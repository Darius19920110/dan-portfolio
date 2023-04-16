import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <ul>
                <li>
                  <div className="name">Programming Languages</div>
                  <div className="progress p98">
                    <span>98%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Data analysis tools</div>
                  <div className="progress p100">
                    <span>100%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Data visualisation tools</div>
                  <div className="progress p99">
                    <span>99%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Database management systems</div>
                  <div className="progress p95">
                    <span>95%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Cloud Computing</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Web Scraping</div>
                  <div className="progress p95">
                    <span>95%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">
                    Communication and interpersonal skills
                  </div>
                  <div className="progress p100">
                    <span>100%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Driving</div>
                  <div className="progress p100">
                    <span>100%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Front End Development</div>
                  <div className="progress p70">
                    <span>70%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Back End Development</div>
                  <div className="progress p80">
                    <span>80%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
