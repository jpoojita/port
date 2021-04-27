import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>

          <p className="lead"></p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa  fa-briefcase"></i>
              </div>

              <div className="timeline-header">
                <h3>Software Developer</h3>
                <p>April 2018 - Present</p>
              </div>

              <div className="timeline-content">
                <h4>Chadwick Riley Corporation (Florida Blue)</h4>
                <p>
                  <strong>Environment:</strong> Java Spring, Node.js, React,
                  JSON, HTML5, CSS3, jQuery, Postman, Git, Swagger
                </p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>

              <div className="timeline-header">
                <h3>Ui Developer</h3>
                <p>August 2017 - April 2018</p>
              </div>

              <div className="timeline-content">
                <h4>MaxoTech Solutions</h4>
                <p>
                  <strong>Environment:</strong> JavaScript, TypeScript, HTML5,
                  CSS3, jQuery, Angular 2, Node Js
                </p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>

              <div className="timeline-header">
                <h3>Junior Developer</h3>
                <p>May 2015 - Dec 2015</p>
              </div>

              <div className="timeline-content">
                <h4>Pramati Technologies</h4>
                <p>
                  <strong>Environment:</strong> Java, JSON, Spring, JSP, JDBC,
                  REST API, MySQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>

              <div className="timeline-header">
                <h3>Master Degree</h3>
                <p>Class of 2017</p>
              </div>

              <div className="timeline-content">
                <h4>Bradley University</h4>
                <p></p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>

              <div className="timeline-header">
                <h3>Bachelor Degree</h3>
                <p>Class of 2015</p>
              </div>

              <div className="timeline-content">
                <h4>Visvesvaraya Technological University</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
