import React from 'react';

function Intro() {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello, World!</h5>
            <div className="container">
              <div className="box">
                <div className="title">
                  <span className="block"></span>
                  <h1>
                    Poojita Jonnalagadda<span></span>
                  </h1>
                </div>

                <div className="role">
                  <div className="block"></div>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>

            <a className="button stroke smoothscroll" href="#about" title="">
              More About Me
            </a>
          </div>
        </div>
      </div>

      <ul className="intro-social">
        <li>
          <a href="www.linkedin.com/in/poojita-j">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Intro;
