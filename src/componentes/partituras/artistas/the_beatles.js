import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../menu/Menu";

class the_beatles extends React.Component {
  render() {
    return (
      <>
        <Menu/>
        <main role="main" className="flex-shrink-0 mt-5">
          <section className="text-center">
            <div className="container">
              <h1>The Beatles </h1>
              <p className="lead text-muted">Albums</p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://loopermx.com/wp-content/uploads/2019/07/AHardsDays_0.jpg"
                      width="348"
                      height="320"
                    ></img>
                    <div className="card-body">
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5>A Hard Day's Night</h5>
                        <div className="btn-group">
                          <NavLink to="/a_hard_days_night" className="nav-link">
                            Ver mas
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default the_beatles;
