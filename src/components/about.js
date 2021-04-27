import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5 className="type">About</h5>
          <h1>Let me introduce myself.</h1>

          <div className="intro-info">
            <p className="lead"></p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Profile</h3>
          <p></p>

          <ul className="info-list">
            <li>
              <strong>Fullname:</strong>
              <span>Poojita Jonnalagadda</span>
            </li>
            <li>
              <strong>Job:</strong>
              <span>Software Developer, Frontend Developer</span>
            </li>
            <li>
              <strong>Website:</strong>
              <span>www.jpoojita.com</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>jpoojita@outlook.com</span>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <h3>Skills</h3>
          <p></p>

          <ul className="skill-bars">
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="progress percent85">
                <span>85%</span>
              </div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>JavaScript</strong>
            </li>
            <li>
              <div className="progress percent80">
                <span>80%</span>
              </div>
              <strong>Java</strong>
            </li>
            <li>
              <div className="progress percent85">
                <span>85%</span>
              </div>
              <strong>React</strong>
            </li>
            <li>
              <div className="progress percent70">
                <span>70%</span>
              </div>
              <strong>Angular</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="mailto:youremail@address.com"
            title="Hire Me"
            rel="noreferrer"
            className="button button-primary"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
