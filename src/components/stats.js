import React from 'react';

export default function Stats() {
  return (
    <section id="stats" className="count-up">
      <div className="row">
        <div className="col-twelve">
          <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-light-bulb"></i>
              </div>
              <h3 className="stat-count">Many</h3>
              <h5 className="stat-title">Crazy Ideas</h5>
            </div>
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-cup"></i>
              </div>
              <h3 className="stat-count">lots of</h3>
              <h5 className="stat-title">Coffee Cups</h5>
            </div>
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-clock"></i>
              </div>
              <h3 className="stat-count">7200</h3>
              <h5 className="stat-title">Hours</h5>
            </div>
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-camera"></i>
              </div>
              <h3 className="stat-count">Creative</h3>
              <h5 className="stat-title">Thinker</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
